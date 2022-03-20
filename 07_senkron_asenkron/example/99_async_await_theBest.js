//! Yetmez! async - await ile okunur kulalım!

/* **Senkron olsa şöyle olurdur**
console.log("Program Başladı!")
const user = getUser(99);
const courses = getCourse(user.name)
const comment = getComment(courses[2])
console.log("Program Bitti!")
*/

// Promise'in then kullanımı her ne kadar güzel olsada, async - await anahatarlarıyla tıpkı senkronmuş gibi yazmak mümkün.
async function showComment(id) {
    //Promise'teki .catch'i async-await ile yakalamak için try-catch kullanılır
    try {
        const user = await getUser(id)
        const courses = await getCourse(user.name)
        const comment = await getComment(courses[2])
        console.log(comment)
    } catch (err) {
        console.log("Hata:" + err) //"Üç işlemden hatası hata alırsa onu yazar"
    }
}

showComment(99)

getUser(99)
    .then((user) => getCourse(user.name))
    .then((comments) => getComment(comments[2]))
    .then((bestComment) => console.log(bestComment))
    .catch((err) => {
        console.log("Hata:" + err) //"Üç işlemden hatası hata alırsa onu yazar"
    })

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
