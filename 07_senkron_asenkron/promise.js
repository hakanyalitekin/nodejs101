/* Pormise : Asenkronluğun yönetilebilmesi için, iç içe kullanılan callback'lerin yarattığı karmaşıklıktan
kurtulmak için ES6 ile birlikte Js geliştiricileri tarafından geliştirilen yapı. 
Bu karışıklığa genelde callback hell denir. Ve şöyle bir görsel ile anlatılır. -> https://miro.medium.com/max/1200/1*sOy11ZsU1ijCSjZwx8ZzGQ.jpeg

Bir promise objesi 3 durumda olabilir;
-> pending (bekliyor)
-> resolve (başarılı) ".then" kullanılır. 
-> reject (başarısız) ".cath" kullanılır.

*/

//Bu Promise objesi döndüren fonksiyon
function getData(data) {
    return new Promise(function (resolve, reject) {
        if (typeof data === "string") {
            resolve("OLUMLU!");
        } else {
            reject(new Error("OLUMSUZ!"));
        }
    });
}

//Bu da kullanma şekli.
//? NORMAL TEK THEN KULLANIMI
getData("Merhaba")
    .then((response) => {
        // console.log(response);
    })
    .catch((err) => {
        //console.log(err);
    });

//? Then içinde tekrar bir return olmasın durumunda tekrar then ile devam edebiliriz.
getData("Merhaba")
    .then((result) => {
        return `${result} -> Sonradan Eklendi!`;
    })
    .then((res) => {
        console.log(res); //bir üstteki then ile bekledik. ve "Sonradan Eklendi!" mesajı eklendi.
    })
    .catch((err) => {
        console.log(err); //!Dikkat: Blok then kullanıldığında sadece 1 adet catch kullanılabilir!
    });
