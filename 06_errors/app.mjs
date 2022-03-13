//! Operational Errors - Programer Errors
/* Hatalar iki ana başlıkta toplanabilir.
 *Operasyonel hatalar :
 Yazılımcı ile ilgilis olmayan, sistemsel hatalar;
 Örneğin: yetersiz bellek -> System is out of memeory
 uzun süre cevap gelmedi -> Request timeout


 *Yazılımcı Hataları:
 Doğrudan yazılımcı ile ilgili hatalar
 Örneği; olmayan bir property'i almaya çalışmak (undefined)
 https://tr.javascript.info/error-handling
 */

//! Hataların Yönetilmesi
//? Throw ->  throw new Error("hata!");
//? Callback -> myFunction(num, function callback(err, result) { if (err) { console.log("hata!") }
//? Promise Rejections -> Promis yapısında değinilecek
//? EventEmitter -> EventEmitter.emit("error")


//! Error Objeleri
/* Error, RangeError, TypeError gibi oldukça çeşitli. Bu link üzerinden tüm listeye erişilebilir.
 https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error */

//? Error
var error = new Error("Test Hatası")
// console.error(error.message)

//? RangeError
var a = 3.14
//console.log(a.toFixed(101)) // 0-100 arası olmalıydı.

//? ReferenceError
function test() { var b = 100 }
// console.log(b) // b değeri skop dışında kaldı.

//? TypeError
// var obj = { "name": "Mahmut Tuncer" }
// console.log(obj.age.a) // Objenin age diye bir property'isi olmadığı halde varmış gibi a'ya erişmeye çalışıyorouz.

//? SyntaxError
// console.log(Math.max(1,2,3)


//! try - catch - finally
try {
    console.log("Başlandi")
    throw new Error("Hata oluştu")

} catch (e) {
    console.log(e.message)

} finally {
    console.log("Her ne olursa olsun çalıştı")
}
//! Callback
//? Örnek
// import fs from "fs"
// fs.readFile("./06_errors/a.txt", "utf-8", (err, data) => {
//     if (err) console.log("hata", err) // HATA için:Bir üst satırdaki yolu değiştirip, olmayan bir dosyayı okumaya çalışalım

//     console.log(data)
// })
//? Bitane Callback'te biz yazalım 

function getUserData(id, callback) {
    var user = null; //DB'den gelmediğini varsayalım.
    if (!user) return callback(new Error("Kullanıcı bulunamadı."))

    callback(null, user)
}

getUserData(1, (err, user) => {
    if (err) console.log(err)

    console.log(user)
}) 