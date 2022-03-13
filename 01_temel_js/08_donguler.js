//! Döngüler

//For
for (var i = 0; i <= 3; i++) {
    console.log(i);
}


// For of -> Diziler
var cities = ["Ankara", "İstanbul", "İzmir"]
for (var city of cities) {
    console.log(city);
}

//For in -> Nesneler için.
var nesne = {
    "a": 1,
    "b": 2,
    "c": 3
}
for (var key in nesne) {
    console.log("for in ->", key, nesne[key]);
}


//while
var i = 1
while (i < 5) {
    console.log(i)
    i++
}

//Do While
i = 1
do {
    console.log("hello world")
    i++
} while (i < 5)


//? Pratik => Hem 7'ye hem de 9'a tam bölünebilen ilk 5 sayıyı bulunuz ve bir listeye atınız.
var number = 1
var found_list = []
for (var i = 0; i < 5; i++) {
    while (number % 7 != 0 || number % 9 != 0) {
        number++
    }
    found_list.push(number)
    number++
}
console.log(found_list);


//Break => Döngüyü kırar.
//Continue => Devam ettirir.