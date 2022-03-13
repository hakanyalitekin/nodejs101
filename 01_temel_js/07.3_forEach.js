//! forEach kavramı
var array = ["Ankara", "İstanbul", "İzmir"];

//normal fonksiyon kullarak.
array.forEach(function (e, index) {
    console.log(e, index)
})

//arrow fonksiyon kullarak
array.forEach((e, index) => {
    console.log(index, e)
})
