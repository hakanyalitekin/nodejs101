//! String Metotlar

//*String Toplama
var a = "Merhaba   ";
var b = "Dünya";
var c = `${a} ${b} "-" ${2 + 2}`;
console.log(c);

//*String'lerin belirli parçasını alma
console.log(a[0]); //?Birinci yöntem.
console.log(a.charAt(0)); //? İkincis yöntem.

//*Belirli Bir karakterin indeksini bulma.
console.log(a.indexOf("a")); //? iki kere varsa ilkini döner.
console.log(a.indexOf("a", 5)); //? belirli bir indeksten sonrasını döner.
console.log(a.lastIndexOf("a"));

//*Kotnrol
console.log(a.startsWith("Me")); //? Büyük küçük duyarlıdır.
console.log(a.startsWith("haba", 3)); //? 3. indeksten sonrasını kontrol eder.
console.log(a.endsWith("haba"));

//*İçerip içermeme kontrolü
console.log(a.includes("hab"));

//*Parçalama
console.log(a.slice(1, 3)); //? 1 dahil 3 değil.
console.log(a.substring(1, 3)); //? 1 dahil 3 değil.

//*Büyük - Küçük dönüşümleri
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//*Baş ve sondaki Boşlukları silme.
console.log(a.trim());

//!NOT: Eşitleme yapılmadığı sürece değişken değişmez.
var z = "test";
z.toUpperCase(); //! Sadece gösterir.
z = z.toUpperCase(); //! dersek eğer atama gerçekleşir.
console.log(z);
