//! Synchronous - Asynchronous
//https://nexocode.com/blog/posts/behind-nodejs-event-loop/

//!Asenkron işleri yönetim yaklaşımları
/*
-> Callback (ES6 Öncesi ama hala kullanımı mevcut)
-> Promise (ES6 Sonrası)
-> async/await (ES7 -> Promise yapısını daha efektif kullanmamızı sağlıyor.)

*/

//?Callback

//!Asenkron - Birbirini beklemeyen işlemler
// function process1() {
//     setTimeout(function () {
//         console.log("1. işlem çalıştı.")
//     }, 3000)
// }

// function process2() {
//     setTimeout(function () {
//         console.log("2. işlem çalıştı.")
//     }, 2000)
// }

// process1()
// process2()
// console.log("Hello")

//! Asenkron'u callback fonksiyon ile yönetmek
/*Bu gerçek hatatta ne işimize yarar, 
örneğin bir dosya okuma işlemi ardındanda ekranda 
gösterme işimiz var bu yapıyı callback fonksiyon ile yönetebiliriz*/
function process1(callbackHKN) {
    setTimeout(function () {
        console.log("1. işlem çalıştı.")
        callbackHKN()
    }, 2000)
}

function process2() {
    setTimeout(function () {
        console.log("2. işlem çalıştı.")
    }, 1000)
}

process1(process2)


// ---Callback 2. Örnek 

var langs = ["Python", "Java", "C++"]
function addLang(lang, callbackHKN) {
    setTimeout(function () {
        langs.push(lang)
        callbackHKN()
        console.log("Yeni bir dil eklendi. ->", lang)
    }, 4000)
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        })
    }, 3000)
}

addLang("JavaScript", getAllLangs)




console.log("JavaScript asenkron çalışır, ben sayfanın en altındayım ama diğerlerinden önce çalıştım 🤭 ")