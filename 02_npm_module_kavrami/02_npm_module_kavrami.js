//!Modül Kavramı

//! Core Modüller
/* Node.Js'in içerisinde kurulu gelen modüller.
İşimizi kolaylaştırmak için varolan araçlar.
js'te ki math objesi gibi belli başlı araçlar dahili olarak gelir.
Örneğin; http module, fs(file system) module vs.
Tam listeye şu adresten erişebiliriz ->  https://flaviocopes.com/node-core-modules/
*/
//NodeJS ile bereber gelen bir modül kullanım örneğin
var os = require("os");
console.log("İşletim sistemi versiyonu->", os.version());

//! Third Party Modüller -
/* NPM -> Node Package Manager -> https://www.npmjs.com/

Projemize package.json eklememiz gerekiyor. Bunun için aşağdaki komutlardan faydalanabiliriz.
-> "npm init" (bize belli başlı sorular sorarak oluşturur)
-> "npm init -y" (boş bir package.json oluşturur)

-> "npm i PaketAdi" (i harfi install'ın kısaltmasıdır.)
-> Eğer proje ile alakası yoksa ve globale kurmak istiyorsak, sonuna "-g" koymalıyız.
-> Örneğin; "npm i nodemon -g" -> https://tugrulbayrak.medium.com/faydal%C4%B1-bir-nodejs-mod%C3%BCl%C3%BC-nodemon-f7b3ffa6df84
*/
//NPM'den indirdiğimiz bir paketin kullanım örneği.
// var express = require('express')
// console.log("test", express.name)


//! Locale Modüller -> ( ES ya da  CommonJS)
/* Node.js uygulamamızda yerel olarak oluşturulan modüllerdir.
Bu modüller, uygulamamızın farklı işlevlerini ayrı dosya ve klasörlerde tutulması mantığı ile çalışır.
Özetle, extension metotlar gibi bir yerde yazıp her yerde kullanabileceğimiz kod parçacıkları
*/

// 1-> CommonJS (npm ilk çıktığında, yerleşik eski format.)

// 2-> ES (Ecmascript 2015 gelen 2020'de NodeJS ile kullanılan yeni nesil import mekanızması.)
/* JS kendi çevresinde ekosisteminde gerçekleşen çözüm yöntemlerini zaman içerisinde kendi içerisine alıp standart hale getirmiştir.
import,export anahtar kelimelerle bu işlemleri en basit, okunabilir ve anlaşılır haline getirmiştir.
Okumalık güzel bir kaynak -> https://devnot.com/2021/javascript-modul-sistemi-es-modules-nedir/*/
