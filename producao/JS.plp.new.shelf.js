/* PC-QUARTO - 23/10/2020 18:27:06 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}(function(){try{var Shelf={init:function init(){Shelf.changeShelfName();Shelf.changeModalityIcon();Shelf.showBrandImage();Shelf.applyImageLoad()},showBrandImage:function showBrandImage(){var wrapper=$(".mz-storefront .mz-storefront__brand");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var brand=$this.find(".brand").text();if(brand=="lfg"){$this.find("img").attr("src","https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-".concat(brand,"-dark-2.png"));$this.find("img").addClass("mz-lfg")}else{$this.find("img").attr("src","https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-".concat(brand,"-dark.png"))}$this.addClass("mz-on loaded")})},applyImageLoad:function applyImageLoad(){if(!$.fn.QD_smartImageLoad){return}$(".mz-storefront").QD_smartImageLoad({sizes:{width:"285",height:"190"}})},changeShelfName:function changeShelfName(){var wrapper=$(".mz-storefront .mz-storefront__name a");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var name=$this.text().split("|")[0];$this.text(name);$this.attr("title",name);$this.parent().addClass("mz-on loaded")})},changeModalityIcon:function changeModalityIcon(){var wrapper=$(".mz-storefront .mz-storefront__category");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var name=$this.find("li").text().trim()||"";var icon=Shelf.data.icons[name]||"";if(!icon.length){$this.addClass("mz-on");return}$this.find("> span").removeClass("icon-stocks");$this.find("> span").addClass(icon);$this.addClass("mz-on")})},data:{icons:{Direito:"icon-direito","Educação":"icon-educacao","Negócios/MBA":"icon-negocios","Saúde, Esporte e Estética":"icon-saude","Ciências sociais, Serviços e Outros":"icon-servicos","Ciências, Exatas e Tecnologia":"icon-tecnologia"}}};$(document).ready(Shelf.init)}catch(e){console.log("Erro na instancia [Shelf]: ",e)}})();var _0x293c=["extend","uPKFa","BKcvX","closest","top","AvLjN","width","imageWrapp","trigger","apply","lfCallback","QD_smartIm","YpLGA","SAkYV","attr","IzNvV","error","body","wPjzT","rnXMv","HeErQ","QD_SIL_scr"," o  “QD_SI","300","ltmiD","EOBvY","offset","sizes","split","each","undefined","warn","oad","join","uxhIW","ageLoad","not","ital - Sma","YIWHV","alerta","VmNTU","Uashs","Quatro Dig","addClass","toLowerCas","AuumI","qTekm","AbEnG","XcndV","hvNOl",":( . Detal","ement","ge-loaded","qxoPd","nIAjI","VfQfD","tdOTS","oll","do ao usar","g_wrapper","zAiBk","img:visibl","unshift","LNYRo","Digital.is","push","object","XtTbn","info","VZGYi","Wrapper nã","JmDys","qd-sil-on","cXgWb","der”","ividualChi","rt Image L","MVAzb","height","hes: ","length","YiDiC","xTrqz","IFzyB","bottom","bHMKw","BoLbw","alChildRen","scroll","RQFuQ","load","qd-sil-ima","UBIcK","tal.sr_she","sdfor","cRodX","find","aviso","first","1|2|0|6|3|",".qd-sil-on","ollRange","VKILQ","L_individu","clone","BCNPh","src","2|0|1|3|4|","scrollTop","BgOnw","Problemas ","documentEl"];(function(_0x3cd523,_0x3d210a){var _0x334ad6=function _0x334ad6(_0x336b24){while(--_0x336b24){_0x3cd523["push"](_0x3cd523["shift"]())}};_0x334ad6(++_0x3d210a)})(_0x293c,907+1353*-1+71*11);var _0x2e8e=function _0x2e8e(_0x3cd523,_0x3d210a){_0x3cd523=_0x3cd523-(907+1353*-1+223*2);var _0x334ad6=_0x293c[_0x3cd523];return _0x334ad6};(function(_0x16e4e5){var _0x3950d9=_0x2e8e,_0x463543={};_0x463543[_0x3950d9("0x52")]=function(_0x2c4ad6,_0x33221d){return _0x2c4ad6===_0x33221d},_0x463543[_0x3950d9("0x48")]=_0x3950d9("0x43"),_0x463543["VZGYi"]=function(_0x28a7c6,_0x5e3bcb){return _0x28a7c6!==_0x5e3bcb},_0x463543[_0x3950d9("0x19")]="undefined",_0x463543[_0x3950d9("0x54")]=function(_0x45e2a4,_0x43ad65){return _0x45e2a4==_0x43ad65},_0x463543[_0x3950d9("0x40")]="function",_0x463543[_0x3950d9("0x5a")]=function(_0xc37fab,_0x3ffd0f){return _0xc37fab+_0x3ffd0f},_0x463543[_0x3950d9("0x37")]=function(_0xd848e,_0x54869e){return _0xd848e+_0x54869e},_0x463543[_0x3950d9("0x32")]=function(_0x108416,_0x217906){return _0x108416==_0x217906},_0x463543[_0x3950d9("0x36")]=_0x3950d9("0x28"),_0x463543["uxhIW"]=function(_0x2b2da9,_0x1ee738){return _0x2b2da9!==_0x1ee738},_0x463543["VmNTU"]=_0x3950d9("0x62"),_0x463543[_0x3950d9("0xd")]=function(_0x12fd01,_0xb567d1){return _0x12fd01!=_0xb567d1},_0x463543[_0x3950d9("0x67")]=_0x3950d9("0x45"),_0x463543[_0x3950d9("0x53")]=function(_0x4059e5,_0x1362a6){return _0x4059e5(_0x1362a6)},_0x463543[_0x3950d9("0x15")]=function(_0x1bc655,_0x133c7a){return _0x1bc655(_0x133c7a)},_0x463543[_0x3950d9("0x38")]=_0x3950d9("0x47")+"o encontra"+_0x3950d9("0x3b")+_0x3950d9("0x17")+_0x3950d9("0x68")+_0x3950d9("0x58")+_0x3950d9("0x4b"),_0x463543["zAiBk"]=_0x3950d9("0x64")+"7|5|4",_0x463543["bHMKw"]=_0x3950d9("0x65"),_0x463543["SAkYV"]=function(_0x50e624,_0x43c892){return _0x50e624<_0x43c892},_0x463543[_0x3950d9("0x31")]=function(_0x4a6c52,_0x57aeda,_0x1bd65e,_0x26634d){return _0x4a6c52(_0x57aeda,_0x1bd65e,_0x26634d)},_0x463543[_0x3950d9("0x5d")]=_0x3950d9("0x6f")+_0x3950d9("0x33")+_0x3950d9("0x50"),_0x463543[_0x3950d9("0x10")]=_0x3950d9("0x6c")+"5",_0x463543[_0x3950d9("0x14")]=_0x3950d9("0x5b"),_0x463543[_0x3950d9("0x60")]=_0x3950d9("0x5c")+_0x3950d9("0x35"),_0x463543[_0x3950d9("0x2a")]=function(_0x269a49,_0x4337d8){return _0x269a49+_0x4337d8},_0x463543["BKcvX"]=_0x3950d9("0x5c")+"ge",_0x463543[_0x3950d9("0x2e")]=_0x3950d9("0x16")+"oll Quatro"+_0x3950d9("0x41")+"_Callback",_0x463543[_0x3950d9("0x2")]="QuatroDigi"+_0x3950d9("0x5e")+_0x3950d9("0xb"),_0x463543[_0x3950d9("0x13")]="QD_SIL_ind"+_0x3950d9("0x4c")+"ldRender",_0x463543[_0x3950d9("0x4e")]=function(_0x2f7aaf,_0x208d5f){return _0x2f7aaf>_0x208d5f},_0x463543[_0x3950d9("0x2f")]=function(_0xce5e9b,_0x55a851){return _0xce5e9b<_0x55a851},_0x463543[_0x3950d9("0x27")]=function(_0x5d945e,_0x33fa91){return _0x5d945e-_0x33fa91},_0x463543[_0x3950d9("0x6e")]=function(_0x4fa089,_0x48f5ad){return _0x4fa089(_0x48f5ad)},_0x463543[_0x3950d9("0x4a")]=function(_0x1b48fc,_0x43038d){return _0x1b48fc===_0x43038d},_0x463543["BCNPh"]=_0x3950d9("0x2b")+_0x3950d9("0x26")+_0x3950d9("0x4d")+_0x3950d9("0x21"),_0x463543[_0x3950d9("0x39")]=".qd_sil_im"+_0x3950d9("0x3c"),_0x463543[_0x3950d9("0x5f")]=_0x3950d9("0x18"),_0x463543[_0x3950d9("0x1a")]=_0x3950d9("0x59");var _0x5d820d=_0x463543;"use strict";var _0x4ae9f6=jQuery;if(_0x5d820d[_0x3950d9("0x4a")](_typeof(_0x4ae9f6["fn"][_0x3950d9("0xc")+_0x3950d9("0x24")]),_0x5d820d[_0x3950d9("0x40")]))return;_0x4ae9f6["fn"][_0x3950d9("0xc")+"ageLoad"]=function(){};var _0x4295e5=_0x5d820d[_0x3950d9("0x6a")],_0x4b20f0=function _0x4b20f0(_0x475287,_0x11887c){var _0x20a08a=_0x3950d9;if(_0x5d820d[_0x20a08a("0x52")](_0x5d820d["JmDys"],typeof console==="undefined"?"undefined":_typeof(console))&&"undefined"!==typeof console[_0x20a08a("0x11")]&&_0x5d820d[_0x20a08a("0x46")](_0x5d820d[_0x20a08a("0x19")],_typeof(console[_0x20a08a("0x45")]))&&_0x5d820d[_0x20a08a("0x19")]!==_typeof(console[_0x20a08a("0x20")])){if(_0x5d820d["IFzyB"](_0x5d820d[_0x20a08a("0x48")],_typeof(_0x475287))&&_0x5d820d[_0x20a08a("0x54")](_0x5d820d[_0x20a08a("0x40")],_typeof(_0x475287[_0x20a08a("0x3f")]))){_0x475287[_0x20a08a("0x3f")]("["+_0x4295e5+"]\n");var _0x1493b6=_0x475287}else _0x1493b6=[_0x5d820d[_0x20a08a("0x5a")](_0x5d820d["nIAjI"]("[",_0x4295e5),"]\n"),_0x475287];if(_0x5d820d[_0x20a08a("0x32")](_0x20a08a("0x1f"),_typeof(_0x11887c))||_0x5d820d[_0x20a08a("0x46")](_0x5d820d[_0x20a08a("0x36")],_0x11887c["toLowerCas"+"e"]())&&_0x5d820d[_0x20a08a("0x23")](_0x5d820d[_0x20a08a("0x29")],_0x11887c[_0x20a08a("0x2d")+"e"]())){if(_0x5d820d[_0x20a08a("0xd")](_0x5d820d[_0x20a08a("0x19")],_typeof(_0x11887c))&&_0x5d820d[_0x20a08a("0x67")]==_0x11887c[_0x20a08a("0x2d")+"e"]())try{console[_0x20a08a("0x45")][_0x20a08a("0xa")](console,_0x1493b6)}catch(_0x23922e){try{console["info"](_0x1493b6[_0x20a08a("0x22")]("\n"))}catch(_0x4f6256){}}else try{console[_0x20a08a("0x11")][_0x20a08a("0xa")](console,_0x1493b6)}catch(_0x450923){try{console["error"](_0x1493b6[_0x20a08a("0x22")]("\n"))}catch(_0x2be47b){}}}else try{console[_0x20a08a("0x20")][_0x20a08a("0xa")](console,_0x1493b6)}catch(_0x22840f){try{console[_0x20a08a("0x20")](_0x1493b6[_0x20a08a("0x22")]("\n"))}catch(_0x58c6f8){}}}},_0x27c64a=/(ids\/[0-9]+-)[0-9-]+/i,_0x12870a={};_0x12870a[_0x3950d9("0x8")+"er"]=_0x5d820d[_0x3950d9("0x39")],_0x12870a[_0x3950d9("0x1c")]={},_0x12870a[_0x3950d9("0x1c")]["width"]=_0x5d820d["sdfor"],_0x12870a[_0x3950d9("0x1c")][_0x3950d9("0x4f")]=_0x5d820d[_0x3950d9("0x5f")];var _0x546e0f=_0x12870a,_0x7b6b6=function _0x7b6b6(_0x57d152,_0x434b59){var _0x11e691=_0x3950d9,_0x3cfc6={};_0x3cfc6[_0x11e691("0x30")]=function(_0x332bd1,_0x1e5782){return _0x332bd1(_0x1e5782)},_0x3cfc6[_0x11e691("0x44")]=function(_0x3f7b91,_0x5b6324){return _0x3f7b91>_0x5b6324};var _0xb496cf=_0x3cfc6;"use strict";_0x31942c(_0x57d152),_0x5d820d["HeErQ"](_0x4ae9f6,window)["on"](_0x5d820d[_0x11e691("0x2e")],function(){_0x31942c(_0x57d152)}),_0x5d820d[_0x11e691("0x15")](_0x4ae9f6,window)["on"](_0x5d820d["uPKFa"],function(){var _0x13e87c=_0x11e691;_0x5d820d[_0x13e87c("0x53")](_0x31942c,_0x57d152)}),_0x5d820d[_0x11e691("0x15")](_0x4ae9f6,window)["on"](_0x5d820d[_0x11e691("0x13")],function(_0x2c43b9,_0x311cef){var _0x2a9fae=_0x11e691,_0x1095c4=_0x57d152[_0x2a9fae("0x61")](_0x311cef);if(_0x1095c4["length"])_0x5d820d[_0x2a9fae("0x15")](_0x31942c,_0x1095c4);else _0x4b20f0(_0x5d820d[_0x2a9fae("0x38")],_0x5d820d[_0x2a9fae("0x36")])});function _0x31942c(_0xe3e4e2){var _0x26e567=_0x11e691;try{var _0x23d993=_0x5d820d[_0x26e567("0x3d")]["split"]("|"),_0x215f72=-9428*1+-5674+15102;while(!![]){switch(_0x23d993[_0x215f72++]){case"0":var _0x1bab19=_0x4ae9f6(window);continue;case"1":var _0xfb1f5a=_0xe3e4e2[_0x26e567("0x61")](_0x434b59["imageWrapp"+"er"])[_0x26e567("0x25")](_0x5d820d[_0x26e567("0x56")])[_0x26e567("0x61")](_0x26e567("0x3e")+"e");continue;case"2":if(!_0xfb1f5a["length"])return;continue;case"3":_0x523152["bottom"]=_0x5d820d[_0x26e567("0x37")](_0x523152["top"],_0x1bab19[_0x26e567("0x4f")]());continue;case"4":for(var _0x3b561c=-16*-347+1929+-7481;_0x5d820d[_0x26e567("0xe")](_0x3b561c,_0x140c0d[_0x26e567("0x51")]);_0x3b561c++){_0x5b27d6(_0x5d820d[_0x26e567("0x15")](_0x4ae9f6,_0x140c0d[_0x3b561c]))}continue;case"5":var _0x140c0d=_0x5d820d[_0x26e567("0x31")](_0x488f9a,_0xfb1f5a,_0x523152,_0x2460dd);continue;case"6":var _0x90c114={};_0x90c114[_0x26e567("0x5")]=_0x1bab19[_0x26e567("0x6d")]();var _0x523152=_0x90c114;continue;case"7":var _0x2460dd=_0xfb1f5a[_0x26e567("0x63")]()[_0x26e567("0x4f")]();continue}break}}catch(_0x4342be){(typeof console==="undefined"?"undefined":_typeof(console))!==_0x5d820d["ltmiD"]&&_0x5d820d[_0x26e567("0x52")](_typeof(console[_0x26e567("0x11")]),_0x5d820d[_0x26e567("0x40")])&&console[_0x26e567("0x11")](_0x5d820d[_0x26e567("0x5d")],_0x4342be)}}function _0x5b27d6(_0x3fe4dd){var _0x43c9b5=_0x11e691,_0x4f6954=_0x5d820d[_0x43c9b5("0x10")][_0x43c9b5("0x1d")]("|"),_0x3af042=-8699+6206+2493;while(!![]){switch(_0x4f6954[_0x3af042++]){case"0":var _0x49d88e=_0x3fe4dd[_0x43c9b5("0x69")]();continue;case"1":_0x49d88e["on"](_0x5d820d["rnXMv"],function(){var _0xc8eca9=_0x43c9b5;_0x1ecd5b["nVyCM"](_0x4ae9f6,this)[_0xc8eca9("0x2c")](_0x1ecd5b[_0xc8eca9("0x57")])});continue;case"2":var _0x20365b={};_0x20365b["nVyCM"]=function(_0x266bc9,_0xd5148d){var _0xf7195e=_0x43c9b5;return _0x5d820d[_0xf7195e("0x15")](_0x266bc9,_0xd5148d)},_0x20365b[_0x43c9b5("0x57")]=_0x5d820d[_0x43c9b5("0x60")];var _0x1ecd5b=_0x20365b;continue;case"3":_0x49d88e[_0x43c9b5("0xf")]({src:_0x49d88e[2347*-4+-3641+13029*1][_0x43c9b5("0x6b")]["replace"](_0x27c64a,_0x5d820d[_0x43c9b5("0x37")](_0x5d820d[_0x43c9b5("0x37")](_0x5d820d["Uashs"]("$1",_0x434b59[_0x43c9b5("0x1c")][_0x43c9b5("0x7")]),"-"),_0x434b59[_0x43c9b5("0x1c")][_0x43c9b5("0x4f")])),width:_0x434b59["sizes"]["width"],height:_0x434b59[_0x43c9b5("0x1c")][_0x43c9b5("0x4f")]});continue;case"4":_0x49d88e[_0x43c9b5("0x2c")](_0x5d820d[_0x43c9b5("0x3")])["insertAfte"+"r"](_0x3fe4dd);continue;case"5":_0x49d88e[_0x43c9b5("0x4")](_0x434b59[_0x43c9b5("0x8")+"er"])[_0x43c9b5("0x2c")](_0x43c9b5("0x49"));continue}break}}function _0x488f9a(_0x3ab89a,_0xe28bd7,_0x51d6a6){var _0x46b27f=_0x11e691,_0x208237,_0x1e983e=[];for(var _0xbc93e8=-3113*1+2827+286;_0xbc93e8<_0x3ab89a[_0x46b27f("0x51")];_0xbc93e8++){_0x208237=_0xb496cf[_0x46b27f("0x30")](_0x4ae9f6,_0x3ab89a[_0xbc93e8])[_0x46b27f("0x1b")](),_0x208237[_0x46b27f("0x55")]=_0x208237["top"]+_0x51d6a6,!(_0xe28bd7[_0x46b27f("0x55")]<_0x208237[_0x46b27f("0x5")]||_0xb496cf[_0x46b27f("0x44")](_0xe28bd7["top"],_0x208237[_0x46b27f("0x55")]))&&_0x1e983e[_0x46b27f("0x42")](_0x3ab89a[_0xbc93e8])}return _0x1e983e}};_0x4ae9f6["fn"][_0x3950d9("0xc")+_0x3950d9("0x24")]=function(_0x428e30){var _0x2e1325=_0x3950d9,_0x265b76={};_0x265b76[_0x2e1325("0x6")]=function(_0x33a414,_0x488c55){var _0x18ae25=_0x2e1325;return _0x5d820d[_0x18ae25("0x15")](_0x33a414,_0x488c55)};var _0x1d1090=_0x265b76,_0x15c3aa=_0x5d820d[_0x2e1325("0x15")](_0x4ae9f6,this);if(!_0x15c3aa["length"])return _0x15c3aa;return _0x15c3aa[_0x2e1325("0x1e")](function(){var _0x32fd2f=_0x2e1325,_0x2d521a=_0x1d1090["AvLjN"](_0x4ae9f6,this);_0x2d521a[_0x32fd2f("0xc")+_0x32fd2f("0x24")]=new _0x7b6b6(_0x2d521a,_0x4ae9f6[_0x32fd2f("0x1")]({},_0x546e0f,_0x428e30))}),_0x15c3aa},window[_0x3950d9("0x16")+_0x3950d9("0x66")]=-1*245+-61*-138+-8133;var _0x25b395=QD_SIL_scrollRange,_0x51c729=-7754+1933*1+5821;_0x5d820d[_0x3950d9("0x6e")](_0x4ae9f6,window)["on"](_0x5d820d[_0x3950d9("0x1a")],function(){var _0x3a3029=_0x3950d9,_0x190ee2=document[_0x3a3029("0x0")+_0x3a3029("0x34")][_0x3a3029("0x6d")]||document[_0x3a3029("0x12")][_0x3a3029("0x6d")];(_0x5d820d[_0x3a3029("0x4e")](_0x190ee2,_0x51c729+_0x25b395)||_0x5d820d["qTekm"](_0x190ee2,_0x5d820d["YIWHV"](_0x51c729,_0x25b395)))&&(_0x5d820d[_0x3a3029("0x6e")](_0x4ae9f6,window)[_0x3a3029("0x9")](_0x3a3029("0x16")+_0x3a3029("0x3a")),_0x51c729=_0x190ee2)})})(void 0);