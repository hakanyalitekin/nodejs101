//! Objects - Nesneler
var user = {
    name: "Ali Yılmaz",
    age: 20,
    address: {
        street: 3,
        city: "Ankara"
    },
    test() {
        console.log("Function!")
    }
};
//Görüntüleme teknikleri
console.log(user.age)
console.log(user["name"])
console.log(user.address.city)
console.log(user.address["street"])
user.test();

//Silmek
delete user.age;
console.log(user)

//Değerleri almak
console.log(Object.values(user))

//Keyleri almak
console.log(Object.keys(user))


// ---------------------------------------
//Key'in köşeli parantezler içinde kullanılması kuralı.
var user_id = "1236"
var data = { name: "Ali", age: 20 }

var users = {
    "1234": { name: "Ayşe", age: 22 },
    "4321": { name: "Fatma", age: 34 },
    // user_id: data
    [user_id]: data // Eğer key'i köşeli parantez içine almazsak,okumaz.
}
console.log(users);

// ---------------------------------------
//Çektiğimiz veri üzerinde bazı alanların olmaması durumunda. (örneğin user - address.city)
//undefined hatası alırz bu durumdan kurtulmak için boş gelme olasığı olan dataya "?" işareti koyarız.
// Örnek Hata Çıktısı => Cannot read properties of undefined (reading 'city')
var data = {
    name: "Ali Yılmaz",
    age: 19
    // Bazen boş geldiğini varsaymak için yorum yapıyoruz.
    // address: {
    //     city: "İstanbul",
    //     street: 3
    // }
}
var city = (data.address?.city) ? data.address.city : "Şehir verisi bulunamadı."
console.log(city);


// İki nesnenin birleştirilmesi. NOT: Eğer iki veride de aynı property varsa ilkini ezer.
var data1 = { name: "Ahmet" }
var data2 = { age: 20 }

// Spread syntax
var result = { ...data1, ...data2 }
console.log(result);

//Object.assign
var result2 = Object.assign(data2, data1)
console.log(result2);


// ---------------------------------------------------------------
// mutable - immutable -> Değiştirilebilir / Değiştirilemez.

var data = {
    name: "Ali",
    age: 19
}

//Prevent(engel olmak, önüne geçmek) -> 
// -->DEGER GÜNCELLENEMEZ.
// -->PROPERTY EKLENEMEZ AMA SİLİNEBİLİR.
Object.preventExtensions(data) // Artık yeni property eklenemez ve değer güncellenemez.
data.city = "Ankara" // Şehir alanı eklenmeyecektir.

Object.isExtensible(data) // true - false olarak değiştirilebilirlik sonucunu dönderir.
console.log("Değiştirilebilir mi?", Object.isExtensible(data))


//Seal(mühürlemek) -> Eklemeye ileve silineyi de engelleme.
// -->DEĞER GÜNCELLENEBİLİR.
// -->PROPERTY EKLENEMEZ VE SİLİNEMEZ.
Object.seal(data)
data.name = "mehmet"
delete data.name
console.log("Name alanı hala var.", data)
Object.isSealed() //Kontrol.

//Freeze(Dondurmak)
// -->HİÇBİR ŞEY YAPILAMAZ.
Object.freeze(data)
Object.isFrozen(data) //Kontrol