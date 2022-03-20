//! async - await Anahtarları (ES7)

async function sayHello(name) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof name === "string") {
                resolve("Merhaba " + name);
            } else {
                reject("Lütfen bir isim giriniz.");
            }
        }, 2000);
    });

    const response = (await promise) + " nasılsın?";
    return response;
}

sayHello("Hakan")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
