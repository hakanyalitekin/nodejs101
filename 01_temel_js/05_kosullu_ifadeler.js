//! Koşullu İfadeler

//? Karşılaştırma Operatörleri
// == -> Değeri eşit mi?
// != -> Değer eğit değil mi?
// === -> Değeri ve tipi eşit mi?
// !== -> Değeri ve tipi eşit değil mi?

// > -> Büyük mü?
// < -> Küçük mü?
// >= -> Büyük ve eşit mi?
// <= -> Küçük ve eşit mi?

// && => Ve
// || => Veya / ya da
// ! => Değil


//! if - else if - else


//Normal İf
var age = 10
if (age >= 18) {
    console.log("Oyun başlatıldı.")
}
else if (age == 30) {
    console.log("Size uygun olmayabilir.")
}
else {
    console.log("Yaşınız tutumuyor?")
}

//Kısaltılmış if - else
if (age >= 18) console.log("Oyun başlatıldı")
else console.log("Yaşınız tutumuyor.")


//ternary(üçlü) if
var result = age >= 18 ? "Oyun başlatıldı" : "Yaşınız tutumuyor."

//Çoklu ternary
//* if ... else if ... else if ... else 
var result2 = age < 18 ? "Yaşınız tutmuyor." : age == 30 ? "Size uygun olmayabilir" : age == 40 ? "Emin misiniz?" : "Oyun Başlatıldı"