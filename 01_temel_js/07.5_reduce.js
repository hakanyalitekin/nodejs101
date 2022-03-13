//! reduce - some - every



//!Reduce -> Bir çok kullanım alanı mevcut.
//İncele -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#counting_instances_of_values_in_an_object

//Reduce-> Toplamını almak istersek
var list = [1, 2, 3, 12, 41]
// var response = liste.reduce((result, currentValue) => { return result + currentValue });
var result = list.reduce((sum, current) => sum + current);
console.log(result);


//Reduce-> Kaç adet var bulma örneği
var list = ["a", "b", "f", "c", "d", "e", "f", "c", "d", "a", "g", "h", "a", "i"]
var result = list.reduce((response, current) => {
    if (!(current in response)) // current, response'un içinde yoksa. ("a" in list -> varsa true yoksa false)
        response[current] = 1
    else
        response[current] += 1

    return response
}, {}) //-> {} başlangıç için boş nesne. responsu içine atıyoruz. örneğin : {"a": 3} 

console.log(result)


//Reduce-> Benzersiz sayıları bulma örneğin
var list = [1, 3, 1, 5, 4, 3, 6, 5, 7, 9, 12]

var result = list.reduce((response, current) => {
    if (!response.includes(current))
        response.push(current)

    return response.sort((a, b) => a - b) //ascending

}, [])

console.log(result)

