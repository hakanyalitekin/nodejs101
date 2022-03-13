
//!  Tarih Fonksiyonları

//?Not
// TimeSpan nedir? -> 1 Ocak 1970'dan şu ana kadar geçen milisaniye
// 1000ms -> 1sn

////TODO:Araştırılacak ->Neden farklı
// var result = new Date();
// console.log(result);
//Debug Console -> Sat Mar 05 2022 16:24:04 GMT+0300 (GMT+03:00)
//Terminal      -> 2022-03-05T13:24:23.420Z


//!Date -> UTC'ye göre verir. (Türkiye +3)
var result = new Date();
console.log(result);

//Spesifik bir tarih girdiğimizde normalde 00:00:000 verir. 
// +3 olduğumuz için 21:00:00 alıyoruz saati ve 14 şubatı veriyor.
var result = new Date("2/15/21")
console.log(result);

//!Date.now ->TimeSpan verir ve bu da ms demektir.
var result = Date.now()
console.log("Date.now() ->", result);

//!TimeSpan to now 
var result = new Date(1646487591919)
console.log("TimeSpan to now ->", result);

//!Get Date
var time = new Date();

console.log("Hangi yıl ->", time.getFullYear())
console.log("Hangi ay ->", time.getMonth() + 1) //Dikkat 0-11 arası getirir. 
console.log("Ayın kaçıncı günü ->", time.getDate())
console.log("Haftanın kaçıncı günü ->", time.getDay())

//!Set Date
var time = new Date()
time.setDate(20); //Günü ayarlamak
time.setFullYear(2020)
console.log("Yıl'ı ayarlamak ->", time)

//!Tarihi Yerelleştirme - Özelleştirme
// Faydalı link -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
var time = new Date()

console.log("Yerel Tarih ->", time.toLocaleDateString() + ":" + time.toLocaleTimeString())

var result = time.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
console.log("Tarih'i özelleştirme ->", result)

//! NE KADAR ZAMAN GEÇTRİ Hesaplama
console.log("Kaç saniye geçtir -> ", Math.round((Date.now() - 1646489310847) / 1000))
console.log("Kaç dakika geçtir -> ", Math.round((Date.now() - 1646489310847) / 1000 / 60)) 