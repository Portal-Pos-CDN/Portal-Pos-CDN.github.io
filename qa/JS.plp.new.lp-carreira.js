/* Maeztra Functions */
(function() {
    try {

        let Carreira = {
            init: function() {
                Carreira.verifyCoockieAndUnlockContent();
                Carreira.startGetUnits();
                Carreira.onSubmitClick();
                Carreira.changeCourses();
                Carreira.applyChangesSelectsModal();
                Carreira.applySelecte2InFilters();
                Carreira.applyValidate();
                Carreira.applyMaskInPhone();
                Carreira.fixShelfTitle();
                Carreira.applyDownloadDirectPDFS();
                Carreira.questionsSlider();
                Carreira.applyMorePost();
                Carreira.applyImageLoad();
                Carreira.showSmartOffer();
                Carreira.clickVoucher();
                Carreira.notificationForLead();
            },
            windowOnload: () => {
                Carreira.prepareClause();
                Carreira.getLocationInStorage();
                
                $(window).on("brandLoaded", () => {
                    Carreira.changeCategoriesURLs();
                });
            },
            dataAll: {
                state: null,
                getStatesOnlyOnce: 0  //  BlackFriday.dataAll.getStatesOnlyOnce
            },
            // Manipulando conteudo pelo cadastro do usuario
            verifyCoockieAndUnlockContent: () => {
                $('#mz-select-course').attr('disabled', 'disabled');
                $('#mz-search-course').attr('disabled', 'disabled');

                // Desbloqueando o conteudo
                let coockieSeted = $.cookie('mzPosBF');
                if (coockieSeted == "cadastrado") {
                    $('a.read-more, a.download').removeClass('locked');
                    $('#mz-list-guide li').removeAttr('data-unlocked');
                    $('#mz-list-guide li').off('click');
                    $('#mz-seoone-form').hide();
                    $('#mz-seoone-text, #mz-seoone-cards').attr('class', 'col-xs-12 col-sm-12 col-md-12');
                    $('.mz-bg__seoblockone.seoblockone').addClass('content-unlocked');

                    return;
                }

                $('a.read-more, a.download').addClass('locked');
                $('#mz-list-guide li').attr('data-unlocked', 'false');
            },
            openModalToUnlockContent: () => {
                $('.mz-bf__guide.content div').on('click', function () {
                    $(document.body).addClass('mz-modal-bf-on');
                });
            },
            // Funcoes para Geo
            getLocationInStorage: () => {
                $(window).on("MZ.locationLoaded", () => {
                    if (!localStorage.mzGeoInfo || !localStorage.mzGeoInfo.length) {
                        // console.log('Localização não encontrada.');
                        return;
                    }

                    let locationSeted = JSON.parse(localStorage.mzGeoInfo); 
                    Carreira.dataAll.state = locationSeted.state.toUpperCase();
                    // console.log(Carreira.dataAll.state);
                    Carreira.prepareClause();
                    // console.log('Localização feita.');
                });
            },
            // Funcoes que preparam os filtros
            getBrandIdFromName(brandName) {
                const brand = window.storeConfig.brands.filter((brand) => {
                    if (
                        brand.name.replaceSpecialChars().toLowerCase() ==
                        brandName.replaceSpecialChars().toLowerCase()
                    ) {
                        return brand;
                    }
                });

                if (brand) {
                    return brand[0].id;
                }

                return null;
            },
            prepareClause: () => {
                let locationType = 'nomeUF';
                let locationName = Carreira.dataAll.state || 'SÃO PAULO';
                let whereClause = `?whereClause=${locationType}="${locationName}"`;
                if ($.cookie("marcaOrigem")) {
                    const brandId = Carreira.getBrandIdFromName(
                        $.cookie("marcaOrigem")
                    );
                    whereClause = "?whereClause=";
                    switch ($.cookie("marcaOrigem")) {
                        case "anhanguera":
                            whereClause +=
                                `(idMarca='${brandId}' AND ${locationType}="${locationName}") ` +
                                //modalities from Uniderp
                                ` OR (idMarca='16' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}")` +
                                //modalities from LFG
                                ` OR (idMarca='19' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}")`;
                            break;
                        default:
                            whereClause +=
                                `(idMarca='${brandId}' AND ${locationType}="${locationName}")` +
                                //modalities from Unopar
                                ` OR (idMarca='1' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}")` +
                                //modalities from LFG
                                ` OR (idMarca='19' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}")`;
                    }
                } else {
                    whereClause = `?whereClause=(idMarca != '12' AND idMarca != '16' AND ${locationType}="${locationName}")`;
                }

                console.log('HER 1');
                Carreira.getModality(whereClause);
            },
            getModality: (whereClause) => {
                let urlModality = window.storeConfig.middleware.url + "/ofertas/modalidades/" + whereClause; 

                $.ajax({
                    url: encodeURI(urlModality),
                    type: "GET",
                    dataType: "json"
                }).done(function (response) {
                    console.log('HER 2');
                    $('#mz-select-modality').select2({
                        placeholder: "Todas as modalidades",
                        minimumResultsForSearch: -1,
                        data: Carreira.facetsToArray(
                            response,
                            "idModalidade"
                        ).filter((elem) => elem.text != "PRESENCIAL")
                         .map(function (item) {
                            //labels
                            if (
                                ~window.location.search.indexOf(
                                    "superbusca"
                                )
                            ) {
                                switch (item.text) {
                                    case "EAD":
                                        return "EDUCAÇÃO A DISTÂNCIA";
                                    case "PRESENCIAL":
                                        return "PRESENCIAL";
                                    case "INTENSIVO":
                                        return "EAD 6 MESES";
                                    case "SEMI_PRESENCIAL":
                                        return "SEMIPRESENCIAL";
                                    default:
                                        return item.text;
                                }
                            }

                            switch (item.text) {
                                case "EAD":
                                    return "EAD 10 MESES";
                                case "PRESENCIAL":
                                    return "PRESENCIAL";
                                case "INTENSIVO":
                                    return "EAD 6 MESES";
                                case "SEMI_PRESENCIAL":
                                    return "SEMIPRESENCIAL";
                                default:
                                    return item.text;
                            }
                        }),
                    });
                });

                Carreira.getCourses(whereClause);
            },
            getCourses: (whereClause) => {
                $('#mz-select-modality').off('change').on('change', function () {
                    $('#mz-select-course').removeAttr('disabled');
                    $('#mz-search-course').attr('disabled', 'disabled');
                    $('#mz-select-course').empty();
                    
                    let currentModality = $('#mz-select-modality').val();
                    let modality = Carreira.getMiddlewareModality(currentModality);

                    if (modality) {
                        let locationType = 'nomeUF';
                        let locationName = Carreira.dataAll.state || 'SÃO PAULO';
                        whereClause = `?whereClause=${locationType}="${locationName}"`;

                        if ($.cookie("marcaOrigem")) {
                            const brandId = Carreira.getBrandIdFromName(
                                $.cookie("marcaOrigem")
                            );
                            whereClause = "?whereClause=";
                            switch ($.cookie("marcaOrigem")) {
                                case "anhanguera":
                                    whereClause +=
                                        `(idMarca='${brandId}' AND ${locationType}="${locationName}" AND idModalidade='${modality}') ` +
                                        //modalities from Uniderp
                                        ` OR (idMarca='16' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}" AND idModalidade='${modality}')` +
                                        //modalities from LFG
                                        ` OR (idMarca='19' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}" AND idModalidade='${modality}')`;
                                    break;
                                default:
                                    whereClause +=
                                        `(idMarca='${brandId}' AND ${locationType}="${locationName}" AND idModalidade='${modality}')` +
                                        //modalities from Unopar
                                        ` OR (idMarca='1' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}" AND idModalidade='${modality}')` +
                                        //modalities from LFG
                                        ` OR (idMarca='19' AND idModalidade != 'PRESENCIAL' AND ${locationType}="${locationName}" AND idModalidade='${modality}')`;
                            }
                        } else {
                            whereClause = `?whereClause=(idMarca != '12' AND idMarca != '16' AND ${locationType}="${locationName}" AND idModalidade='${modality}')`;
                        }
                    }

                    let urlCourse =  window.storeConfig.middleware.url + "/ofertas/cursos/" + whereClause;

                    $.ajax({
                        type: "GET",
                        url: encodeURI(urlCourse),
                        dataType: "json"
                    }).done(function (response) {
                        $('#mz-select-course').select2({
                            placeholder: "Todos os Cursos",
                            matcher: Carreira.select2.matchCustom,
                            data: Carreira.facetsToArray(
                                response,
                                "nomeCurso"
                            ),
                        });
                    });
                });
            },
            changeCourses: () => {
                $('#mz-select-course').on('change', function () {
                    $('#mz-search-course').removeAttr('disabled');
                });
            },
            startGetUnits: () => {
                Carreira.getUnits();
            },
            applyChangesSelectsModal: () => {
                // Aplicando as cidades a partir do ESTADO selecionado
                $('#mz-select-state').on('change', () => {
                    $('#mz-select-unit').attr('disabled', 'disabled');

                    let cities = Carreira.getCities($('#mz-select-state').find(':selected').val());
                    $('#mz-select-city').empty(); // zerando os valores anteriores 
                    $('#mz-select-city').append('<option selected="true" value="">Selecione uma cidade</option>');
                    for (let i = 0; i < cities.length; i++) {
                        $('#mz-select-city').append(`<option value="${cities[i]}">${cities[i]}</option>`);
                    }
                });

                // Aplicando a unidade/polo a partir da CIDADE selecionada 
                $('#mz-select-city').on('change', () => {
                    $('#mz-select-unit').removeAttr('disabled');

                    $('#mz-select-unit').empty(); // zerando os valores anteriores 
                    $('#mz-select-unit').append('<option selected="true" value="">Selecione uma unidade/polo</option>');
                    let unitsFiltered = Carreira.getUnitsFiltered($('#mz-select-state').find(':selected').val(), $('#mz-select-city').find(':selected').val());
                    for (let i = 0; i < unitsFiltered.length; i++) {
                        $('#mz-select-unit').append(`<option value="${unitsFiltered[i]}">${unitsFiltered[i]}</option>`);
                    }
                });
            },
            getUnits: () => {
                // Busca as unidades/estados/cidades apenas uma vez na página 
                if (Carreira.data.units == '') {
                    $.ajax({
                        url: 'https://middleware.portalpos.com.br/api/v1/unidades/',
                        type: 'GET',
                        dataType: 'json'
                    }).done(function (unidades) {                          
                        if ($.cookie("marcaOrigem") == "anhanguera") {
                            Carreira.data.units = unidades.filter((info) => info.uf != null && 
                                                                               info.cidade != null && 
                                                                               (info.idMarca == Carreira.data.institutions["uniderp"] ||
                                                                               info.idMarca == Carreira.data.institutions["anhanguera"]));

                        } else {
                            Carreira.data.units = unidades.filter((info) => info.uf != null && 
                                                                           info.cidade != null && 
                                                                           info.idMarca != Carreira.data.institutions["uniderp"] &&
                                                                           info.idMarca != Carreira.data.institutions["anhanguera"]);
                        }

                        Carreira.data.states = Carreira.getUFs();
                        let ufs = Carreira.data.states;

                        // Faz o append dos estados
                        $('#mz-select-state').append('<option selected="true" value="">Selecione um estado</option>');
                        for (var i = 0; i < ufs.length; i++) {
                            $('#mz-select-state').append(`<option value="${ufs[i]}">${ufs[i]}</option>`);
                        }
                    });
                } 
            },
            getUFs: () => {
                return [...new Set(Carreira.data.units.map(obj => obj.uf)) ].sort();
            },
            getCities: (stateUF) => {
                const cities = [...new Set(Carreira.data.units
                                    .filter((obj) => obj.uf.toLowerCase() == stateUF.toLowerCase())
                                    .map((obj) => obj.cidade))
                                ].sort();
                
                if (!cities.length) {
                    console.error('[Gerador LP] Cidades não encontradas!');
                    return [];
                }
            
                return cities;
            },
            getUnitsFiltered: (stateUF, city) => {
                let unitsFilt = [...new Set(Carreira.data.units
                        .filter((obj) => 
                            obj.uf.toLowerCase() == stateUF.toLowerCase() && 
                            obj.cidade.toLowerCase() == city.toLowerCase() 
                            )
                        .map((obj) => obj.nome))
                    ].sort();

                if (!unitsFilt.length) {
                    console.error('[Gerador LP] Unidades não encontradas!');
                    return [];
                }
                
                return unitsFilt;
            },
            applySelecte2InFilters: () => {
                $('#mz-select-state').select2({
                    placeholder: "Selecione um estado",
                    matcher: Carreira.select2.matchCustom,
                    language: {
                        noResults: function() {
                            return "Nenhum estado encontrado!";
                        }
                    },
                    dropdownParent: $('#mz-select-state').parent()
                });

                $('#mz-select-city').select2({
                    placeholder: "Selecione uma cidade...",
                    matcher: Carreira.select2.matchCustom,
                    language: {
                        noResults: function() {
                            return "Nenhuma cidade encontrada!";
                        }
                    },
                    dropdownParent: $('#mz-select-city').parent()
                });

                $('#mz-select-unit').select2({
                    placeholder: "Selecione Unidade/Polo...",
                    matcher: Carreira.select2.matchCustom,
                    language: {
                        noResults: function() {
                            return "Nenhuma unidade encontrada!";
                        }
                    },
                    dropdownParent: $('#mz-select-unit').parent()
                });
            },
            applyValidate: () => {
                let form = $('#mz-first-form');
                Carreira.setValidateConfigs(form);

                form.on('submit', function(event) {
                    let dataJson = form.serializeObject();
                    let urlTarget = `/api/dataentities/semanastart02/search?_schema=mz-body&email=${dataJson.email}&an=portalposqa`;


                    event.preventDefault();
                    event.stopPropagation();

                    if (form[0].checkValidity()) {
                        console.log('Form Validado Com sucesso!');
                        // Verifico se esse cara já é cadastrado
                        $.ajax({
                            type: 'GET',
                            method: 'GET',
                            url: urlTarget,
                            dataType: 'json',
                            headers: {
                                "Accept": "application/vnd.vtex.ds.v10+json", 
                                "Content-Type": "application/json; charset=utf-8" 
                            }                   
                        }).done(function(dataCheck) {
                            if (dataCheck.length) {
                                $.cookie("mzPosBF", "cadastrado", { expires: 45 });

                                swal({
                                    icon: "success",
                                    title: "Você já tem um cadastro nesse guia, liberamos o contéudo para você",
                                    text: "Agora vamos te direcionar para o Guia de Carreira onde você terá acesso aos conteúdos exclusivos. Aproveite!"
                                }).then(() => {
                                    $('a.read-more, a.download').removeClass('locked');
                                    $('#mz-list-guide li').removeAttr('data-unlocked');
                                    $('#mz-list-guide li').off('click');
                                    $('#mz-seoone-form').hide();
                                    $('#mz-seoone-text, #mz-seoone-cards').attr('class', 'col-xs-12 col-sm-12 col-md-12');
                                    $('.mz-bg__seoblockone.seoblockone').addClass('content-unlocked');

                                    $('html, body').animate({
                                        scrollTop: $('.mz-bf__guide.content').offset().top - 100
                                    }, 1000);
                                });
                                return;
                            }

                            // Se não for, Cadastro esse cara
                            Carreira.sendDataToMD(dataJson);

                        }).fail(() => {
                            swal({
                                icon: "error",
                                text: "Erro ao fazer verificação de dados."
                            });
                        });
                    }
                    
                    return false;
                });
            },
            sendDataToMD: (dataJson) => {
                if (dataJson.reberofertas == 'on') {
                    dataJson.reberofertas = true;
                } 

                // Setando a URL disparada
                dataJson["urlenviada"] = window.location.href;

                // Disparando dados pro MD
                $.ajax({
                    headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
                    url: "/api/dataentities/semanastart02/documents?_schema=mz-body&an=portalposqa",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(dataJson)
                }).done(function (response) {

                    $(document.body).removeClass('mz-modal-bf-on');

                    // Setando o Cookie
                    $.cookie("mzPosBF", "cadastrado", { expires: 45 });
                    swal({
                        title: "Agradecemos seu cadastro!",
                        text: "Agora vamos te direcionar para o Guia de Carreira onde você terá acesso aos conteúdos exclusivos. Aproveite!",
                        icon: "success",
                        button: "Me leve para o Guia!"
                    }).then(() => {
                        $('a.read-more, a.download').removeClass('locked');
                        $('#mz-list-guide li').removeAttr('data-unlocked');
                        $('#mz-list-guide li').off('click');
                        $('#mz-seoone-form').hide();
                        $('#mz-seoone-text, #mz-seoone-cards').attr('class', 'col-xs-12 col-sm-12 col-md-12');
                        $('.mz-bg__seoblockone.seoblockone').addClass('content-unlocked');

                        $('html, body').animate({
                            scrollTop: $('.mz-bf__guide.content').offset().top - 100
                        }, 1000);
                    });
                }).fail(() => {
                    swal({
                        icon: "error",
                        text: "Erro ao cadastrar no guia de carreiras."
                    });
                });
            },
            applyMaskInPhone: () => {
                // Máscara de telefone/celular
                let SPMaskBehavior = (val) =>
                        val.replace(/\D/g, "").length === 11
                            ? "(00) 00000-0000"
                            : "(00) 0000-00009";
            

                $('#id-phone-first').mask(SPMaskBehavior, {
                    onKeyPress: function (val, e, field, options) {
                        field.mask(SPMaskBehavior.apply({}, arguments), options);
                    },
                });
            },
            setValidateConfigs: (form) => {
                form.validate({ 
                    rules: {
                        nome: {
                            required: true,
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        telefone: {
                            required: true
                        },
                        estado: {
                            required: true
                        },
                        cidade: {
                            required: true
                        },
                        unidadepolo: {
                            required: true
                        }
                    },
                    errorPlacement:(error, element) => { 
                        if (element.attr('name', 'estado')) {
                            element.closest('.fields-state').append(error);
                        } 
                        if (element.attr('name', 'cidade')) {
                            element.closest('.fields-city').append(error);
                        } 
                        if (element.attr('name') !== 'cidade' || element.attr('estado') !== 'estado') {
                            element.closest('.fields').append(error);
                        }
                    }
                });
            },
            // Funcoes de layout/fixers
            applyDownloadDirectPDFS: () => {
                $('#mz-pdf-one').attr('href', 'https://drive.google.com/uc?id=10YCygIeO0Vvx3FmK2jTmeMlZowevZn6t&export=download');
                $('#mz-pdf-two').attr('href', 'https://drive.google.com/uc?id=1kr6ABNB0pZZXS2l9_PnlJESeioUxRcdS&export=download');
                $('#mz-pdf-tree').attr('href', 'https://drive.google.com/uc?id=10ldGW1fmARS4uILvv4ar_pkj9VFhaomS&export=download');
                $('#mz-pdf-four').attr('href', 'https://drive.google.com/uc?id=1VZkWI1dkJYiE6TxocmEs_4THfjmFl5DK&export=download');
                $('#mz-pdf-five').attr('href', 'https://drive.google.com/uc?id=1X2L9TiMsJlvuCoU5AYq3R8Nvpm0IIW_e&export=download');
                $('#mz-pdf-six').attr('href', 'https://drive.google.com/uc?id=15Zc_W6IuQEoQZ5-u2Nt9dl1-otD2gL14&export=download');
                $('#mz-pdf-seven').attr('href', 'https://drive.google.com/uc?id=1ho9vD2BLRzYxR4k4CSmEE9sxGPf6jkv7&export=download');
            },
            questionsSlider: () => {
                $('.mz-bf__questions.blocks .blocks.first').on('click', function () {
                    let $t = $(this);
                    $t.find("button").toggleClass('actived');
                    $t.next().slideToggle('fast');
                });
            },
            fixShelfTitle: () => {
                let wrapperFind = $('.mz-shelf h2');
                wrapperFind.each(function () {
                    let $t = $(this);
                    let targetAppend = $t.closest('.mz-shelf').find('.mz-shelf__title');
                    $t.prependTo(targetAppend);
                });
            },
            // Funcoes que preparam o redirect
            getSpecificationParamByName(name) {
                const productFields = window.storeConfig.productFields;

                if (productFields[name.toLowerCase()]) {
                    return ("specificationFilter_" + productFields[name.toLowerCase()]);
                } else {
                    console.error("Unrecognized productFields name");
                    return name;
                }
            },
            getMiddlewareModality: (modalidade) => {
                switch (modalidade) {
                    case "EAD - 10 meses":
                        return "EAD";
                    case "EAD 10 MESES":
                        return "EAD";
                    case "Educação a distância":
                        return "EAD";
                    case "Semi-presencial":
                        return "SEMI_PRESENCIAL";
                    case "Presencial":
                        return "PRESENCIAL";
                    case "EAD - 6 meses":
                        return "INTENSIVO";
                    case "EAD 6 MESES":
                        return "INTENSIVO";
                }
            },
            getVTEXModality(modality) {
                switch (modality) {
                    case "EDUCAÇÃO A DISTÂNCIA":
                        return "Educação a distância";
                    case "EAD 10 MESES":
                        return "EAD - 10 meses";
                    case "PRESENCIAL":
                        return "Presencial";
                    case "EAD 6 MESES":
                        return "EAD - 6 meses";
                    case "SEMI_PRESENCIAL":
                        return "Semi-presencial";
                }
            },
            getRedirectUrl: function (locationType, locationName, modality, course) {
                let paths = []; 
                let mapParams = []; 
                let url = "";

                paths.push("cursos");
                mapParams.push("c");

                if ($("body").hasClass("marca-lfg")) {
                    paths.push("lfg");
                    mapParams.push("b");
                }

                paths.push(locationName);
                mapParams.push(
                    Carreira.getSpecificationParamByName(locationType)
                );

                if (modality) {
                    paths.push(modality);
                    mapParams.push(
                        Carreira.getSpecificationParamByName("Modalidade")
                    );
                }

                if (course) {
                    paths.push(course);
                    mapParams.push(
                        Carreira.getSpecificationParamByName("Nome Curso")
                    );
                }

                if ($.cookie("marcaOrigem") != "anhanguera") {
                    var collectionId = window.linksMenuHeader["unopar"].colecao.split("?O=")[0];
                    paths.push(collectionId);
                    mapParams.push("productClusterSearchableIds");
                }

                url = paths.join("/") + "/?map=" + mapParams.join(",");
                url += "&homeSearch=true";
                url += "&O=OrderByNameASC";

                return url;
            },
            redirect(url) {
                if ($("body").hasClass("marca")) {
                    $.ajax({
                        url: encodeURI("/api/catalog_system/pub/products/search/" + url),
                        type: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        complete: function (jqXHR, textStatus) {
                            var data = JSON.parse(jqXHR.responseText);
                            if (data.length == 1 && textStatus == "success") {
                                window.location = encodeURI(
                                    location.origin + "/" + data[0].linkText + "/p"
                                );
                            } else {
                                window.location = encodeURI(
                                    location.origin + "/" + url
                                );
                            }
                        }
                    });
                } else {
                    window.location = encodeURI(location.origin + "/" + url);
                }
            },
            // Faz a busca da categoria 
            onSubmitClick: () => {
                $('.mz-bf__filter.selects button.btn').one('click', function () {
                    Carreira.onSubmit();
                });
            },
            onSubmit: () => {
                const locationName = Carreira.dataAll.state;
                const locationType = 'nomeUF';
                const modality = Carreira.getVTEXModality($('#mz-select-modality').select2("data")[0].text);
                const course = $('#mz-select-course').select2("data")[0].text;

                if (!locationName) {
                    return;
                }

                const url = Carreira.getRedirectUrl(
                    locationType,
                    locationName,
                    modality,
                    course
                );

                window.storeHelpers.generic.setSearchLocation(
                    locationType,
                    locationName
                );

                window.storeHelpers.generic.setAdvancedSearchResult(
                    locationName,
                    modality || "Todas as modalidades",
                    course || "Todas os cursos"
                );

                Carreira.redirect(url);
            },
            // Funcao do blog
            applyMorePost: () => {
                $('.mz-blog__showmore a').on('click', function () {
                    $('.mz-blog__showmore').hide();

                    let thisUrlTarget = window.urlPostSeted.replace("&page=1&", "&page=2&");

                    try {
                        // Busca todos os posts normais
                        $.ajax({
                            type: 'GET',
                            method: 'GET',
                            url: thisUrlTarget                
                        }).done(function(dataTexts) {
                            var dataInfos = dataTexts;
                            $.ajax({
                                type: 'GET',
                                method: 'GET',
                                url: window.urlCategorieSeted
                            }).done(function(dataBlocks) {
                                var dataComponents = dataBlocks;
                                dataInfos.forEach(itemInfo => {
                                    dataComponents.filter(itemComp => {
                                        if (itemInfo.categories[0] == itemComp.id) {
                                            Carreira.buildElementPost(itemInfo, itemComp);
                                        }
                                    });
                                });
                            }).fail(function() {
                                console.error("Erro ao buscar posts do Blog - [2]");
                                $('.mz-blog').hide();
                            });
                        }).fail(function() {
                            console.error("Erro ao buscar posts do Blog - [1]");
                            $('.mz-blog').hide();
                        });
                    }
                    catch(e) {
                        $('.mz-blog').hide();
                        console.log('Erro na request do blog: ', e.message);
                    }
                });
            },
            buildElementPost: (itemInfo, itemComp) => {
                let wrapper = $('.mz-blog__wrapper');
                let urlPost = itemInfo.link; // Link do post
                let namePost = itemInfo.title.rendered; // Nome do Posts
                let datePost = moment ? moment(itemInfo.date).format('LL') : itemInfo.date; // Data dos Posts
                let flag = itemComp.name; // Flag (categoria no blog)
                let link = itemComp.link; // Link da Categoria do Blog
                let flagColor = itemComp.slug; // Cor da flag
                let srcImage; // url absoluta da imagem (src)
                
                try {
                    $.ajax({
                        async: true,
                        type: 'GET',
                        method: 'GET',
                        url: `https://blog.portalpos.com.br/wp-json/wp/v2/media/${itemInfo.featured_media}?per_page=10`           
                    }).done(function(response) {
                        srcImage = `https://blog.portalpos.com.br/${response.media_details.sizes.thumbnail.source_url}`;
                        let block = `
                            <div class="mz-blog__block mz-blog__block-integrated">
                                <a href="${urlPost}" style="display: block;" target="_blank" title="${namePost}">
                                    <div class="mz-blog__block--image">
                                        <img src="${srcImage}" style="width: 100%;" />
                                    </div>
                                    <div class="mz-blog__block--text">
                                        <div class="mz-blog__block--text-flag ${Carreira.getCategoryClass(flagColor)}">${flag}</div>
                                        <div class="mz-blog__block--text-title">${namePost}</div>
                                        <div class="mz-blog__block--text-date">
                                            <span>${datePost}</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                        wrapper.append(block);
                        wrapper.addClass('mz-blog-on');
                    }).fail(function() {
                        console.error("[Blog] Imagem do post não encontrada!");
    
                        let block = `
                            <div class="mz-blog__block mz-blog__block-integrated">
                                <a href="${urlPost}" style="display: block;" target="_blank" title="${namePost}">
                                    <div class="mz-blog__block--image no-image">
                                        <img src="https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-mais-blog.png" />
                                    </div>
                                    <div class="mz-blog__block--text">
                                        <div class="mz-blog__block--text-flag ${Blog.getCategoryClass(flagColor)}">${flag}</div>
                                        <div class="mz-blog__block--text-title">${namePost}</div>
                                        <div class="mz-blog__block--text-date">
                                            <span>${datePost}</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                        wrapper.append(block);
                        wrapper.addClass('mz-blog-on');
                        $('.mz-iterations__blog').addClass('mz-new-layout');
                    });
                }
                catch(e) {
                    $('.mz-blog').hide();
                    console.log('Erro na request individual dos posts: ', e.message);
                }
            },
            applyImageLoad: () => {
                if (!$.fn.QD_smartImageLoad) {
                    return;
                }

                $('.mz-storefront').QD_smartImageLoad({
                    sizes: {
                        width: '285',
                        height: '180'
                    }
                });
            },
            showSmartOffer: () => {
                const wrapper = $('.mz-custom-offer');

                if (!wrapper.length) {
                    return;
                }

                let modality = $('.mz-custom-offer__modality').text() || "";
                let percentage = $('.mz-custom-offer__percentage').text() || "";


                if (!modality.length || !percentage.length) {
                    return;
                }

                $('.mz-storefront').each(function() {
                    let $t = $(this);

                    if ($t.is(".mz-so-on")) {
                        return;
                    }

                    let currentModality = $t.find('.mz-storefront__modality .product-field > ul > li').text();

                    if (!currentModality.length) {
                        return;
                    }

                    if (currentModality.indexOf(modality) < 0) {
                        return;
                    }

                    $t.find('.stamps-highlight').hide();
                    $t.find('.mz-storefront__image').append(`<div class="mz-storefront__customflag">${percentage}%</div>`);

                    const customFlag = $('.mz-custom-offer__flag').text().trim();

                    if (!customFlag.length) {
                        $t.addClass("mz-so-on");
                        return;
                    }

                    $t.find('.mz-storefront__image').append(`<div class="mz-storefront__customflagtop">${customFlag}</div>`);

                    $t.addClass("mz-so-on");
                });
            },
            changeCategoriesURLs: () => {
                let wrapper = $('.mz-bf__categories.list');
                let currentLinks = window.linksMenuHeader["unopar"];

                if ($.cookie("marcaOrigem") == "anhanguera") {
                    currentLinks = window.linksMenuHeader["anhanguera"];
                }

                wrapper.find("li").each(function() {
                    let $t = $(this);
                    let currentCategory = $t.attr("class");

                    $t.find("a").attr("href", currentLinks[currentCategory]);
                });
            },
            getCategoryClass(category) {
                switch (category) {
                    case 'carreiras-e-mercado':
                        return 'orange'
                    case 'crescimento-pessoal':
                        return 'light-green'
                    case 'curiosidades':
                        return 'purple'
                    case 'tendencias-inovacao':
                        return 'green'
                    case 'voce-na-pos':
                        return 'blue'
                    default:
                        return ''
                }
            },
            notificationForLead: () => {
                $('#mz-list-guide li').on('click', function () {
                    let $t = $(this);
                    let thisData = $t.attr('data-unlocked');
                    if (thisData == "false") {
                        swal({
                            title: "Conteúdo exclusivo Guia de Carreira.",
                            text: "Acesse o conteúdo gratuitamente por tempo limitado. Disponível entre os dias 12/02/2021 à 17/02/2021.",
                            //icon: "success",
                            button: "Não quero perder!"
                        }).then(() => {
                            $('html, body').animate({
                                scrollTop: $('#mz-first-form').offset().top - 25
                            }, 1000);
                        });
                    }
                });
            },
            clickVoucher: () => {
                if (!$('.mz-lpbf-promotionbanner__wrapper').length) {
                    return;
                }

                $(".mz-lpbf-promotionbanner__link").click(function(e) {
                    e.preventDefault();

                    let $t = $(this);

                    if ($t.is(".copied")) {
                        return;
                    }

                    Carreira.copyTextToClipboard($t.parent().find('.mz-lpbf-promotionbanner__coupon').text());

                    $t.addClass('copied');
                });
            },
            fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                
                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";
              
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
              
                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('[LP BF V2] Fallback: Cópia feita com sucesso! Mensagem: ' + msg);
                } catch (err) {
                    console.error('[LP BF V2] Fallback: Erro: ', err);
                }
              
                document.body.removeChild(textArea);
            },
            copyTextToClipboard(text) {
                if (!navigator.clipboard) {
                    Carreira.fallbackCopyTextToClipboard(text);
                    return;
                }
                navigator.clipboard.writeText(text).then(function() {
                    console.log('[LP BF V2] Cópia feita com sucesso!');
                }, function(err) {
                    console.error('[LP BF V2] Erro: ', err);
                });
            },
            // Funcoes Utils
            facetsToArray(object, field) {
                //get array with options
                var fieldItems = Object.keys(
                    object.filter(function (item) {
                        if (item.field == field) return item;
                    })[0].facets
                );

                //removing empty itens
                fieldItems = fieldItems.filter(function (item, index) {
                    if (item) return item;
                });

                fieldItems.unshift("");

                fieldItems.sort();
                //transforming to select2 data format
                return fieldItems.map(function (item, index) {
                    if (item == "") {
                        return {
                            id: "",
                            text: "",
                        };
                    }

                    return {
                        id: field + "---" + item,
                        text: item,
                    };
                });
            },
            select2: {
                matchStart(params, data) {
                    // If there are no search terms, return all of the data
                    if ($.trim(params.term) === "") {
                        return data;
                    }

                    // Skip if there is no 'children' property
                    if (typeof data.children === "undefined") {
                        return null;
                    }

                    // `data.children` contains the actual options that we are matching against
                    var filteredChildren = [];

                    var searchTerm = params.term
                        .replaceSpecialChars()
                        .toUpperCase();
                    $.each(data.children, function (idx, child) {
                        var childText = child.text
                            .replaceSpecialChars()
                            .toUpperCase();
                        if (
                            childText
                                .toUpperCase()
                                .indexOf(searchTerm.toUpperCase()) == 0
                        ) {
                            filteredChildren.push(child);
                        }
                    });

                    // If we matched any of the timezone group's children, then set the matched children on the group
                    // and return the group object
                    if (filteredChildren.length) {
                        var modifiedData = $.extend({}, data, true);
                        modifiedData.children = filteredChildren;

                        // You can return modified objects from here
                        // This includes matching the `children` how you want in nested data sets
                        return modifiedData;
                    }

                    // Return `null` if the term should not be displayed
                    return null;
                },
                matchCustom(params, data) {
                    // If there are no search terms, return all of the data
                    if ($.trim(params.term) === "") {
                        return data;
                    }

                    // Do not display the item if there is no 'text' property
                    if (typeof data.text === "undefined") {
                        return null;
                    }

                    // `params.term` should be the term that is used for searching
                    // `data.text` is the text that is displayed for the data object

                    var searchTerm = params.term
                        .replaceSpecialChars()
                        .toUpperCase();
                    var dataText = data.text
                        .replaceSpecialChars()
                        .toUpperCase();

                    if (dataText.indexOf(searchTerm) > -1) {
                        var modifiedData = $.extend({}, data, true);

                        // You can return modified objects from here
                        // This includes matching the `children` how you want in nested data sets
                        return modifiedData;
                    }

                    // Return `null` if the term should not be displayed
                    return null;
                },
            },
            data: {
                units: [],
                states: [],
                cities: [],
                courses: [],
                unitsFiltered: [],
                form: "",
                institutions: {
                    "anhanguera": "12",
                    "fama": "7",
                    "lfg": "19",
                    "pitagoras": "4",
                    "unic": "5",
                    "uniderp": "16",
                    "unime": "8",
                    "unopar": "1"
                },
                saved: {
                    estado: false,
                    cidade: false,
                    curso: false,
                    unitsFiltered: false,
                }
            }
        };

        // Instanciando a funcao
        Carreira.windowOnload();
        $(document).ready(Carreira.init);
    
    } catch (e) {
        console.log('Erro na instancia [Carreira]: ', e);
    }
})();

// qd-include Web/JS/mz-plugins/mz-jquery.mask.min.js

// qd-include Web/JS/components/common/JS.plp.new.shelf.js
// qd-include Web/JS/components/wishlist/JS.plp.new.wishlist.js
// qd-include Web/JS/mz-plugins/mz-jquery.cookie.min.js
// qd-include Web/JS/mz-plugins/JS.cookie.min.js