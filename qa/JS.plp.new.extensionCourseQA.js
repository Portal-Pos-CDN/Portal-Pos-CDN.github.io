function getTipoCurso () { 
    let orderData = JSON.parse(localStorage.getItem("orderData"))
    let tipoCurso = orderData.tipoCurso

    if (tipoCurso[0] == "EXTENSAO" || tipoCurso[1] == "EXTENSAO" || tipoCurso[2] == "EXTENSAO"){
        $("body").addClass("extensao");
        getExtensionCourseInfo();
    }
}
function getExtensionCourseInfo () {
    // let conteudoProgramatico = Product.dataAll.dataProduct.description;
    // let duraçãoCurso = Product.dataAll.dataProduct.Duração;
    // let conteudoProgramaticoBox = $(".conteudoProgramatico .descriptions")[0];
    // if ($("body").hasClass("extensao")) {
    //     if (conteudoProgramaticoBox.innerText == "") {
    //         conteudoProgramatico = conteudoProgramatico.split(";");
    //         conteudoProgramatico.forEach((element, ix) => {
    //             $(".conteudoProgramatico .descriptions").append(`<p ${ix % 2 != 0 ? 'class="striped"' : ""}>${element}</p>`);
    //         });
    //     }
    //     $("#extensionDuracaoCurso").text(duraçãoCurso)
    // }

    // $(".certification.descriptions").html(`<p>Os cursos livres online são certificados pela Universidade Pitágoras Unopar Anhanguera.</p>`);
    // $(".texts.certification").removeAttr("style");

    console.log("testeajdiadpoasjdoiasjdaosidjas");
}
