//! setTimeout -> Bir sefer çalışır.
//! setInterval (interval -> aralık) -> Verilen süre zarfında tekrar tekrar çalışır.


//! setTimeout ->
setTimeout(() => {
    console.log("test")
}, 2000)

/*Dikkat! -> Kesin verilen süre içerisinde çalışacağı anlamına gelmiyor.
 En az verdiğimiz süre içerisinde çalışacak anlamına geliyor. */
var time = Date.now()
setTimeout(() => {
    console.log("Süre farkı testi ->", Date.now() - time)
}, 2000)

//! clearTimeout ->  silme/vazgeçme

var timeout = setTimeout(() => {
    console.log("iptel edilecek.")
}, 2000)

clearTimeout(timeout)


function write() {
    console.log("fonksiyon kullanılabilir.")
}

setTimeout(write, 2000)


// ! setInterval
setInterval(() => {
    console.log("interval")
}, 2000)


//! clearInterval -> silme/vazgeçme
var counter = 0
var clearInter = setInterval(() => {
    counter++

    console.log("clearInterval", counter)

    if (counter == 4)
        clearInterval(clearInter)

}, 2000)
