//! Switch-Case Yapısı

var input = 6;
var expression = input % 7 == 0 ? 7 : input % 7; //Bu kontrolü koyduk çünkü input'a 7 girildiyse 7'ye bölümden kalan 0 oluyordu.
var day;

//Haftanın ilk günün pazartesi varsayıp girilen input'a göre hangi günde olduğumuzu bulalım.
switch (expression) {
    default: day = "Lütfen geçerli bir tarih giriniz."; break
    case 1: day = "Pazartesi"; break;
    case 2: day = "Salı"; break;
    case 3: day = "Çarşamba"; break;
    case 4: day = "Perşembe"; break;
    case 5: day = "Cuma"; break;
    case 6:
    case 7: day = "Haftasonu"; break;
}