//! Fonksiyonlar

//Void fonksiyon.
function test() {
    console.log("Void fonksiyon")
}
test()

//Değer döndüren fonksiyon
function square(n = 0) {
    var square = n ** 2
    return square
}
console.log("Girilen Değerin Karesi : " + square(2))


//Arrow Function
//Eğer tek parametre alıyorsa ya da hiç parametre almıyorsa, parentez kaldırılabilir. (), n
var cube = (n) => {
    return n ** 3
}
console.log("Girilen Değerin Kübü : " + cube(2))


// ----------------------------------------------------------------
//Arguments
function arg(x) {
    console.log(arguments[2]);
}
arg(10, 20, 30);

function arg2(...x) {
    console.log(x[2]);
}
arg2(10, 20, 30);

//Recurvise Fonction / Özyinemeli / Kendi kendini cağıran fonksiyonlar.
function recursive(x) {
    console.log("Recursive =>", x)
    if (x < 5) {
        recursive(x + 1)
    }
}
recursive(1)


//Callback Fonction
//Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun çalışmasını sağlayan fonksiyonlara callback fonksiyon denir. 
function square(n) {
    return n ** 2
}
function sayHello(callBack) {
    console.log("Hello")
    var result = callBack(2)
    console.log(result)
}

sayHello(square);


//Nested Fonction | iç içe fonksiyonlar.
//Erişim belirleme ile ilgilidir. nest_func dışarda kullanılamaz. test fonksiyonuna hizmet eder.
function test() {
    console.log("test çalıştı.")

    function nest_func() {
        console.log("Nest func çalıştı")
    }
    nest_func();
}
test()



// ------------------- Örnek Faktöriyel Hesaplama--------------------------------------------
function recursive_fac(x) {
    if (x == 0) return 1
    else return x * recursive_fac(x - 1)
}
console.log(recursive_fac(3))