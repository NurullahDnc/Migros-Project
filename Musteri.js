//

//!  kisi bazlı calısacak 

//? birden fazla musteri olabilir musterinin biligilerini alıp ust sınıfa gondericez / migrosBase sınıfını miras alıcak
//? kod terkarı olan kodları bi ust sınıfa yazıyoruz

class Musteri extends migrosBase{

    constructor(isim, soyisim, kartVarmı, urunler){ //? dısarıdan gelecek olan parametreler
        super(isim, soyisim, kartVarmı, urunler);   //? miras alıncak class'a gonderiliyor

    }

    hesapla(){
       return super.hesapla();
    }
}