//! Event - Olay Yöneticisi
//Olaya dayalı programlama Node.js’in en önemli özelliklerinden biridir.
//NodeJS Core Modülü özel olay eklemek/kaldırmak için kullanılan EventEmitter nesnesine sahiptir.
//Emitter -> TR -> Emitör/Yayıcı

import { EventEmitter } from "events"

var emitter = new EventEmitter()

function tikla() {
    console.log("Tıklandı!")
}
function tikla2(sayi) {
    console.log("Tıklandı iki!", sayi)
}


// event handler - event listener denir.
// on'un uzun hali -> emitter.addListener('tik', tikla)
//!ON
emitter.on('tik', tikla)
emitter.on('tik', tikla2)

emitter.emit('tik', 3) // birden çok çağırılabilir.



//!ONCE
//Tek bir kere çağırılabilir
emitter.once('tek', () => { console.log('once bi kere çalışır.') })

emitter.emit('tek')
emitter.emit('tek') //-> iki kere çağırdığımız halde tek sefer çalışıyor.

//emit'leri yorumlayarak dene. ilk emit öncesini gösteriri çünkü.)
//!Event Adlarımızı Görebiliriz.
console.log("event adlarımız ", emitter.eventNames())

//!Listener/Handler'larımızı görebiliriz.
console.log("listener", emitter.listeners("tik"))


//!Tek Listener silme
// emitter.removeListener("tik", tikla2) ->uzun hali
emitter.off("tik", tikla2) // kısa hali.

//Silmek istediğimiz fonksiyonun adı olmasaydı (bknz:tikla2) yani Arrow Function kullanmış olsaydık
//listener array döndüğü için index numarası ile yakalayabilirdik.
// emitter.off("tik", emitter.listeners("tik")[1])
console.log("removeListener çalıştıktan sonra", emitter.listeners("tik"))

//! Tüm Listener'ları silme
emitter.removeAllListeners("tik")
console.log("removeAllListeners çalıştıktan sonra", emitter.listeners("tik"))