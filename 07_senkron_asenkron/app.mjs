//! Synchronous - Asynchronous
//https://nexocode.com/blog/posts/behind-nodejs-event-loop/

function makeFile(mahmut) {
    console.log("Dosya oluştur.")

    mahmut()
}

makeFile(function () {
    console.log("Dosya oluşturulmaya başlandı.")
})