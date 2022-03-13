//! splice - slice -> Verilen indekslere göre eşitlemezsek siler, eşitlersek o elemanları yeni listeye ekler.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//! slice -> dilimlemek
/* slice -> metotu parametre olarak başlangıç ve bitiş indeksi olmak üzere iki parametre alır.
 Başlangıç indeksinden başlayarak bitiş indeksine kadar olan bütün elemanları siler ve yeni bir array oluşturur. 
 Bitiş indeksi ise silinen elemanlara dahil değildir.
 .slice() metotu original arrayi de değiştirmez. Değiştirme isteniyorsa atama yapılmalıdır.
 */
console.log(numbers.slice(2)); // 2. indexten başlayarak sonraki elemanları siler.
// [3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.slice(2, 6)); // 2. indexten başlayarak 6.index dahil olmamak üzere aradaki elemanları siler.
// [3, 4, 5, 6]

console.log(numbers) // Slice işlemleri original array'i değiştirmez. Değişim isteniyorsa atama yapılmalıdır.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//! splice -> eklemek, uçları birleştirmek
/* .splice() metotunun en önemli ve unutulmaması gereken özelliği .slice()’ tan farklı olarak original arrayi değiştirmesidir.
 .splice() metotu ile bir array’ e hem ekleme hem de silme işlemi yapılabilir.
 Silerken -> Birincisi başlangıç indeksi iken ikinci indeks silinecek eleman sayısını gösterir.
 Silerken -> Eğer parametre olarak tek bir sayı verilirse bu, o indeksten sonraki bütün elemanları siler.
 Eğer başlangıç indeksi pozitif bir sayıysa dizinin başından, eğer negatif bir sayıysa dizinin sonundan silmeye başlar. 

 Eklerken -> 2.parametre 0 olarak verilmelidir. ilk parameter hangi indeksten sonra ekleyeceğimizi belirtir.
*/

// EKLEME
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(4, 0, "97", "98", 99)
console.log("splice add: ", numbers)

// SİLME 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleted = numbers.splice(2, 3);
// numbers is [1, 2, 6, 7, 8, 9, 10] 
// deleted is [3, 4, 5]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleted = numbers.splice(2, 2);
// numbers is [1, 2, 5, 6, 7, 8, 9, 10] 
// deleted is [3, 4]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleted = numbers.splice(-3, 2);  // Burada dizinin sonundan 3 eleman geri gider ve 2 tane elemanı siler.
// numbers is [1, 2, 3, 4, 5, 6, 7, 10] 
// deleted is [8, 9]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleted = numbers.splice(-5, 5);  // Burada dizinin sonundan 5 eleman geri gider ve 5 tane elemanı siler.
// numbers is [1, 2, 3, 4, 5] 
// deleted is [6, 7, 8, 9, 10]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleted = numbers.splice(-4, 1);  // Burada dizinin sonundan 4 eleman geri gider ve 1 tane elemanı siler.
// numbers is [1, 2, 3, 4, 5, 6, 8, 9, 10]
// deleted is [7]


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Bu diziyi ikiye bölmek için de kullanılabilir.
var deleted = numbers.splice(5);
// numbers is [1, 2, 3, 4, 5,]
// deleted is [6, 7, 8, 9, 10]


