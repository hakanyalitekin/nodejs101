//! ES Modules ->
// Okumalık güzel bir kaynak -> https://devnot.com/2021/javascript-modul-sistemi-es-modules-nedir/*/

//? Bilinmeli -> Aktifleştirmek
/*
    Öncelikle aktifleştirmek için  package.json (yoksa "npm init -y" komutu ile oluşturuyoruz)
    ve içerisinde her hangi bir yere  "type": "module" ekliyoruz bu sayede aktifleştiriyoruz.
*/
//? Bilinmeli -> Aktifleştirmek 2.Yordam
/*
   Her zaman package.json dosyamız olmak zorunda değil. Böylesi durumlarda da formatımızı;
   -> .js yerine .mjs olarak değiştiriyoruz yani örneğin : app.mjs
   -> kullanacağımız modulü de .mjs olmalıdır  örneğin : uderData.mjs

*/
//? Bilinmeli -> require hatası'nı tanıyalım.
/*
    Bu modu aktifleştirdiğimizde artık require'ı kullanamayız. Kullanmak istediğimizde
    şöyle bir hata alırız: 
    var fa = require("fs");
     ->   "require is not defined in ES module scope, you can use import instead"
*/

//? Bilinmeli -> ES Modülü CommonJS Modülünü kapsar ->ES >= CommonJS
/*
    Bu ne demek CommonJS ile export edilmiş bir NPM pakatini ES ile kullanabiliyorken
    ES ile dağıtılmış bir paketi CommonJS modülü ile kullanamayız.
    Örneğin -> 
        -> "node-fetch@3" -> modülünü 3.versiyonu ES ile export edilmiş sorunsuzca kullanabiliriyorken, CommonJS ile import edip kullanamazdık.
        -> express ->  modülü CommonJS ile yazılmış olmasına rağman sorunsuzca ES modülü ile kullanabiliyoruz.

*/

//!Default Export
import data from './userData.mjs'
console.log("Default Export -> data", data.name)


//!Name Export
/* Verilen isim ile kullanılmalı örneğin : time
 eğer istediğimiz ismi vermek istiyorsak "as" ile  "time as OzelTime" yapılabilir.
*/
import { user, timeSpan as time, printNameFunc, val1 } from './userData.mjs';
console.log("time ->", time.toLocaleDateString())
console.log("doğrudan kullanım ->", user.age)
console.log("val1 =", val1)
printNameFunc()

//Hepsini tek seferde alabilir. Ayrı ayrı almak zorunda değilim.
// as ile verdiğimiz ismi kullanmak zorundayız bknz(data2)
import * as data1 from './userData.mjs'
console.log("* ile kullanım ->", data1.user.age)
data1.printNameFunc()
console.log("val2 =", data1.val2)


//!Belirli bir şarta göre kullanabiliriz.
var isEdit = true;
if (isEdit) {
    var result = await import("./userData.mjs")
    console.log("result -> ", user.age)

}