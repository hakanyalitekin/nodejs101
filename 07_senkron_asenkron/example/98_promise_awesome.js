//! Promise ile callback cehenneminden çıkalım!

//Callback'lerden kurtulup promise ile örneği;
getUser(99)
    .then((user) => getCourse(user.name))
    .then((comments) => getComment(comments[2]))
    .then((bestComment) => console.log(bestComment))
    .catch((err) => {
        console.log("Hata:" + err) //"Üç işlemden hatası hata alırsa onu yazar"
    })

//then cehennemeine dönüştürmek mümkün. yukarıdaki kullanım daha doğru
// getUser(99).then((user) => {
//     getCourse(user.name).then((course) => {
//         getComment(course[2]).then((bestComment) => {
//             console.log(bestComment)
//         })
//     })
// })

//Kullanıcı Getir
function getUser(id) {
    console.log(id + " numaralı kullanıcı getiriliyor.")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: "Hakan" })
        }, 1500)
    })
}

// Kullanıcının Kurslarını Getir
function getCourse(userName) {
    console.log(userName + " kişisinin kursları getiriliyor.")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["java", "kotlin", "c#"])
        }, 2000)
    })
}

//Kurlanıcının kayıtlı oldu kursun en çok oy alan yorumu getiriliyor.
function getComment(courseName) {
    console.log(courseName + " isimli kursun yorumları getiriliyor.")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Harika bir kurs!")
        }, 2500)
    })
}
