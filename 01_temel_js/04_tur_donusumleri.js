//! Tür Dönüşümleri ve Number Metotlar

//! string => number dönüşümleri
//Temel Dönüşüm Tipleri 
var a = "3.14"
console.log("parseInt =>", parseInt(a)); //Virgülden sonrasını önemsemez.
console.log("parseFloat => ", parseFloat(a)); // Ondalıklı ifadeleri dönüştürür.
console.log("Number =>", Number(a)); //Olduğu gibi çevirir.
console.log("isNaN =>", isNaN(a));
console.log("isInteger =>", Number.isInteger(a));

var b = 10.439;
//? toFixed => //Verilen parametreye göre veriyi yuvarlar. Yuvarlerken 5'e kadar aşağı 5'den sonra yukarı yuvarlar.
console.log("toFixed(0) => ", b.toFixed(0));
console.log("toFixed(2) => ", b.toFixed(2));


//! x => string dönüşümleri
var x = 123;
console.log("toString() => ", x.toString());
console.log("String() => ", String(x));


//! Tip Kontrolü
console.log("typeOf", typeof a)

//Bazı Notlar

//? NaN >=> Not A Number'in kısaltması.
//? null ve undefined object oldukları için dönüştürülemezler.
//? Number işlemlerinde null'ın değeri 0'dır, true = 1 , false = 0

//? console.log("3" + undefined) //? => 3undefined
//? console.log("3" + null)      //? => 3null
//? console.log(3 + null)        //? => 3 + 0 = 5
//? console.log("3" + 5)         //? => 35
//? console.log(3 + 5)           //? => 8

//? console.log("3" + "5")       //? => 35
// + ve -(eksi)'de text'leri birleştirse de diğer işlemlerde matematiksel olduğunu anlıyor.
//? console.log("3" * "5") //?   //? => 15
//? console.log("15" / "3") //?  //? => 5
//? console.log("3" ** "2") //?  //? => 9