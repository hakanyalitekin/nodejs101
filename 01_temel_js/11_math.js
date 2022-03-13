//! Matametiksel İşlemler
// Sadece Number tipi ile çalışır.

//!Rastgele Sayı oluşturmak
// 0 ve 0.99 arası üretir.
var result = Math.random()
console.log("Random ->", result)


/*Aralığı belirtmek için çarpan vermek gerekir.
Örneğin 0-100 arası vermek istersek 100'ile çarpmalıyız.
Ama bu yeterli olmaz çünkü 0.99 maksimum olacağı için hiçbir zaman 100 olamaz
Bunun önüne geçemk için aşağı yuvarlamalıyız. 
Neden aşağı -> 0.99 olduğunda 99.9 olur. bu yüzden her zaman aşağı yuvarlayıp 1 eklemeliyiz.*/
//!Aşağı Yuvarlamak
var result = Math.floor(Math.random() * 100) + 1
console.log("Aşağı yuvarlamak ->", result)

//!Yukarı yuvarlamak
var result = Math.ceil(54.000001)
console.log("Yukarı Yuvarlamak  ->", result)


//!Yuvarlamak
//54.4 -> 54
//54.5 ->
var result = Math.round(54.5)
console.log("Round ->", result)


//!Max-Min
var list = [-1, 22, 13, 4, 41]
var result = Math.max(...list)
console.log("Max ->", result)
var result = Math.min(...list)
console.log("Min ->", result)

//! Karekök 
var result = Math.sqrt(4) //Square Root'tan geliyor ismi.
console.log("Karekök ->", result)

//! Mutlak Değer
var result = Math.abs(-224) //Square Root'tan geliyor ismi.
console.log("Mutlaj Değer ->", result) 