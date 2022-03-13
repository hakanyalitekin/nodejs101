function getName() {
    return "Mahmut Tuncer"
}

function getEmail() {
    return "mahmut@gmail.com"
}


module.exports.isim_getir = getName
exports.mail_getir = getEmail //-> Böyle de yazılabilir. module zorunlu değil.
exports.ulke_getir = "Türkiye" //-> Doğrudna text'te dönebilirdik. (Dikkat -> Kullanırken parantez konulmamalıdır.)

//fonksiyonlar doğrudan kullanılabilir
exports.plaka_getir_arrow = (n) => { return 2 * n }
exports.sehihir_getir = function getCity() { return "Adana" }