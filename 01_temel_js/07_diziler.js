//! Diziler

var empty_array = [];
empty_array.length = 8; //Dizinin uzunluğunu tanımlar.

var array = [12, "test", 3, 656];

//Dizinin spesifik bir elemanına ulaşmak
console.log(array[0]);

//length -> Dizinin uzunluğunu verir.
console.log(array.length);

//Dizinin son elemanını almak.
console.log(array[array.length - 1]);



//pop -> Dizinin son elemanını siler.
array.pop();
console.log("pop", array)

//push -> Dizinin sonuna eleman ekler.
array.push("new")
console.log("push", array)

//shift -> Dizinin ilk elemanını siler.
array.shift();
console.log("pop", array)

//unshift -> Dizinin başına  ekler.
array.unshift();
console.log("pop", array)

//reverse -> Diziyi tersine çevirmek
array.reverse()
console.log("reverse", array)

//Dizinin belli elemanını değiştirmek.
array[1] = "Ahmet"
console.log(array);

// Include -> Girilen değerin var olup olmama kontrolü.
console.log("includes:", array.includes("Ahmet"))

//!Some -> Bir adet koşula uyan var mı yok mu yoktrolü -> varsa true yoksa false
var list = [1, 2, 3, 12, 41]
console.log("some:", list.some(e => e > 12))

//!Every -> Listenin tamamı koşula uyuyor mu -> varsa true yoksa false
console.log("every:", list.every(e => e > 12))



// indexOf -> Girilen elemanın kaçıncı indekste olduğunu döner.
console.log("indexOf", array.indexOf(0)) // Eğer yoksa -1 döner.

//Split -> string değerden, dizi oluşturma
var test = "Merhaba Dünya nasılsın?"
console.log("split ile array oluşturma =>", test.split(" "))


//!Bazı Notlar
var arr = [1, 2, 3]
var arr2 = arr;
arr2.push(4) //Normalde düz mantık arr2'ye eklemesini beklenir. Fakat arraylar primitive değildir. Referans tiptir. 
console.log("Referance Tyepe : arr =>", arr)
console.log("Referance Tyepe : arr2 =>", arr2)
