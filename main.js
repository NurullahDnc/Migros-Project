//
//! iki tane sayfayı kontol edecegimiz yer / kontol yeri 

//ekrana cıktı
let mesaj =
    `
    migros'a Hos Geldiniz :)
    Money Kartınız Var mı?

    1-Evet
    2-Hayır
`;


// urunleri tanımladık
let urunler = [{
    urunIsimi: "Sut",
    fiyat: 15
}, {
    urunIsimi: "bebek bezi",
    fiyat: 100
}, {
    urunIsimi: "kıyma",
    fiyat: 250
}]



let sonuc = confirm(mesaj); //? ekranda alert gibi evet hayır seklinde  mesaj degiskenini yazdır.
//ture veya false deger donecek
let odenecekTutar;


if (sonuc) {
    // True, money kart vardır

    let isim = prompt("adınızı giriniz :");
    let soyisimi = prompt("soyisminizi giriniz");

    //! class nesnesini burada tanımlandı burdan gonderiyor  musteri.js ordan da migrosBase.js gonderiyor 
    
    let musteri = new Musteri(isim, soyisimi, sonuc, urunler); //?nesne turetim musteri ad( isim - soyisim - kartı varmı? sonuc verdim - urunler)
    odenecekTutar = musteri.hesapla(); //? musteri icerisindeki hesapla metodunu cagır

    alert(`musteri bilgileri : ${musteri.isim} ${musteri.soyisim}   //? musteri classından alıyor yani
        odenecek Tutar : ${odenecekTutar}

        `);

} else {
    // false money kart yoktur.
    let musteri = new Musteri(null, null, sonuc,urunler);
    odenecekTutar = musteri.hesapla(); 
    alert(`odenecek Tutar : ${odenecekTutar}`);
}