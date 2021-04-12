function parentezlerDengeliMi(metin) {
    //disardana gelen stringi arraya cevir
    const dizi = metin.split('');

    const sonuc = dizi.reduce(function (prev, karakter) {
        if(prev<0){
            return prev;
        }

        if (karakter === '(') {
            return ++prev;
        } 
        if(karakter === ')'){
           return --prev;
        }

        return prev;
    }, 0); // sonuc sıfır cıkıyorsa dengelidir.
     
    if(!sonuc){
        console.log(metin+ "dengeli bir yapıdadır.");
    }
    else{
        console.log(metin+ "dengeli bir yapıda değildir.");
    }
}

parentezlerDengeliMi('()');
parentezlerDengeliMi(')(');
parentezlerDengeliMi('()()()()()()()');
parentezlerDengeliMi('()(');