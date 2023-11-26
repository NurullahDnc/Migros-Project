//
//!  Base  yani  mirass alınacak, islem yapılacak class'alrın oldugu yer


class migrosBase {

    indirimOranı = 20; //? degisken / migros kartı olanlara indirim 

    constructor(isim, soyisim, kartVarmı, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmı = kartVarmı;
        this.urunler = urunler;

    }

    hesapla() { //? funtion indirim oranını hesaplayacak

        odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) { //? bu class'ın icindeki urunleriKontolt- deger isitor(urunler) parametre olarak verdim boolen
            // sepette urun var
            if (this.kartVarmı) {
                //money kartı var
                this.urunler.forEach((urun) => { //? urunler icerisinde don ve urun olarak yakakala
                    // her urunun fiyatını aldım */ 100 - indirimoranından  / 100'e boldum her urunde  %20 lik indirim oldu / degisken icerisine at
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOranı) / 100);

                })
            } else {
                //money kartı yok
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat; //?  kartı olmayan musterilere indirim uygulanmayacak 

                })

            }

        } else {
            // sepet boş

            alert("en az bir tane urun almalısınız...")
        }

        return Number(odenecekTutar); //? metod cagırıldıgı yere return et
    }



    urunleriKontrolEt(urunler) { //? gelen urunleri kontol edecek bos mu dolu mu   (parametere olarak if icerisine verildi)

        if (urunler !== null && urunler.length > 0) { //? urun null degil ise ve urun uzunlugu 0 dan buyuk ise / yani urun olacak 
            return true; //? ona gore deger dondur ture false
        } else {
            return false
        }
    }
    
}