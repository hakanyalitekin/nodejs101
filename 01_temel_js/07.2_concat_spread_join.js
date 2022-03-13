
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];
var array4 = [10, 11, 12];

//! Concat -> concatenate'ten türetilmiştir. Birleştirmek anlamına gelir.
var result = array1.concat(array2) //iki listeyi birleştirmek
//console.log(result);

var result = array1.concat(array2, array3, array4); // ikiden fazla listeyi birleştirmek.
//console.log(result);


//! Spread -> yaymak, açmak -> Birden fazla senaryo için kullanmak mümkün.

// 1. Kullanım -> Fonksiyonlara Sınırsız Parametre Özelliği
function myFunc(...numbers) {
    for (var number of numbers)
        console.log(number);
}
myFunc(1, 3, 5, 6, 7, 8);


//2.Kullanım -> Dizi Elemanlarını Tek Seferde Elde Etme 
var hello = ["Merhaba", "Dünya", "naber?"];
console.log(...hello);


//3.Kullanım -> Dizi Elemanlarını birleştirmek
console.log(...array1, ...array2, 98, 99, ...array3);


function myFunction(...x) {
    console.log(...x);
}


//! Join -> katmak, katılmak
var hello = ["Merhaba", "Dünya", "naber?"];
console.log(hello.join(" "))
console.log(hello.join(" -- "))

//Join için bir case -> Cümlenin ilk harfini büyüt!

var test = "ankara, Türkiye'nin başkentidir."
var response = test.split(" ") //dizi haline getirdir.

response[0] = `${response[0][0].toUpperCase()}${response[0].slice(1)}`

console.log(...response)

//! NOT
// response[0] -> ankara
// response[0][0] -> a
// response[0][0].toUpperCase() -> A
// response[0].slice(1) -> nkara