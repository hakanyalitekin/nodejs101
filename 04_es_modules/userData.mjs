// İki çeşit export türü vardır bunlar;

//! Default Export (export default) ->  Herhangi bir isim vermeden doğrudan kullanılır.

// export default 10

// export default function(){
//     return 2*2
// }

export default { name: "Ahmet", age: "20" }
//CommonJS karşılığını hatırlayalım ->  module.exports = { name: "Ahmet", age: "20" }


//! Name Export (export) -> Belirli bir tanımlayıcı ile kullanılır. Örneğin:(data , test vb.)
//Ayrı ayrı da yazılabileceği gibi tek var kullanıp virgül ile ayırıp birden çok export verilebilir.
export var user = { name: "Ahmet", age: "20" }, timeSpan = new Date

//Doğrudan fonksiyon verilebilir.
export function printNameFunc() {
    console.log("Mahmut Tuncer")
}

//Değişkenleri süslü parantez ile verebiliriz.
var val1 = 10
var val2 = 20
var val3 = 30
export { val1, val2, val3 }


