//! Callback cehennemine düşelim!

//iç içe callback'lerin kullanıldığı eski yordam.
getUser(99, (user) => {
    getCourse(user.name, (courses) => {
        getComment(courses[2], (bestComment) => {
            console.log(bestComment)
        })
    })
})

//Kullanıcı Getir
function getUser(id, callback) {
    console.log(id + " numaralı kullanıcı getiriliyor.")
    setTimeout(() => {
        callback({ id: id, name: "Hakan" })
    }, 1500)
}

// Kullanıcının Kurslarını Getir
function getCourse(userName, callback) {
    console.log(userName + " kişisinin kursları getiriliyor.")
    setTimeout(() => {
        callback(["java", "kotlin", "c#"])
    }, 2000)
}

//Kurlanıcının kayıtlı oldu kursun en çok oy alan yorumu getiriliyor.
function getComment(courseName, callback) {
    console.log(courseName + " isimli kursun yorumları getiriliyor.")
    setTimeout(() => {
        callback("Harika bir kurs!")
    }, 2500)
}
