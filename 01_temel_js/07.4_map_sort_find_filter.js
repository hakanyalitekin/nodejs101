//! Map - Sort - Find - Filter

//!Map
var liste = [2, 3, 4, 5, 6]

// liste = liste.map(e => e ** 2) //Kısa hali tek satır kod olduğu için süslüleri kaldırdık.
liste = liste.map((e) => {
    return e ** 2
})
console.log(liste)

var liste = ["Ali", "Vei", "Ahmet", "Mehmet"]
liste = liste.map((e, i) => `${i + 1} - ${e}`).join("\n")
console.log(liste)


//!Find(değeri verir) - FindIndex(indeksi verir)
/*Büyük küçük harf duyarlıdır. Tek bir değer döndürür.
Dikkat:Briden farklı uyum olsa bile ilk bulduğu değer döner.*/
var liste = ["Ali Yılmaz", "Veli Öztürk", "Ahmet Er", "Mehmet Dönmez"]
var result = liste.find(x => x.startsWith("Al"))
console.log(result)

//!Filter
//Find ile aynı mantıkta çalışır farkı ilk bulduğunu değil koşulu sağlayanların hepsini döner.
var ages = [15, 16, 17, 18, 19, 20, 21]
ages = ages.filter(x => x > 17)
console.log(ages)
//Normal şartlarda array metotları objeler üzerinde çalışmaz. Fakat Object nesnesinden faydalanılabilir.
var nesne = {
    1: "Ahmet",
    2: "Mehmet",
    3: "Yılmaz"
}
nesne = Object.entries(nesne).filter(x => x[1].length < 6)
console.log(nesne)


//!Sort 
//Dizileri sıralamak için kullanılıyor.

//Default sıralama. Önce rakamları sıralar sonra alfabeyi. (ascending - küçükten büyüğe)
// 1,12,3 diye sıralar.
var liste = [3, 1, 6, 12, "abv", "bcs", "cgf"]  //1,12,3....
liste = liste.sort();
console.log(liste);

var liste = [3, 1, 7, 5, 12]
//ascending
liste = liste.sort((a, b) => a - b)
console.log(`Küçükten büyüğe:${liste}`)
//descending
liste = liste.sort((a, b) => b - a)
console.log(`Büyükten küçüğe:${liste}`)