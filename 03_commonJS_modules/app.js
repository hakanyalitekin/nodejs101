//! CommonJS

// var data = require("C:/Users/hakan/OneDrive/Masaüstü/nodejs101/03_commonJS_modules/userData.js") -> Böyle de yazılabilir.
var data = require("./userData.js");
console.log("data -> kullanici ->", data.isim_getir())
console.log("data -> ülke -> ", data.ulke_getir)
console.log("data -> şehir -> ", data.sehihir_getir())
console.log("data -> plaka -> ", data.plaka_getir_arrow(2))


//!Belirli bir şarta göre kullanabiliriz.
var isEdit = true;

if (isEdit) {
    var result = require("./userData.js")
    console.log("result -> ülke -> ", result.ulke_getir)

}