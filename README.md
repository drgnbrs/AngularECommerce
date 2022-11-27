# ECommerceProject

Projeyi oluştururken [Angular CLI](https://github.com/angular/angular-cli)'ın 14.2.6 versiyonunu kullandım.

## Server'lar

Server'a `ng serve` kodu uygulanınca `http://localhost:4200/` sayfasına yönlendiriliyor ve uygulama çalışmaya başlıyor. Json server içinse 'json-server --watch db.json' kodunu uygulanması gerekiyor.

## Proje Açıklaması
Uygulama çalışmaya başladığında bizi login sayfası karşılıyor. Oradan signup ekranına geçiş yapıp sistea kayıt olmak gerekiyor. Kayıt yapıldıktan sonra tekrar login ekranından o kayıtla giriş yapılabiliyor.

Giriş yapılınca bizi ürünlerin olduğu sayfa karşılıyor. Burada arama, filtreleme, ürünleri sepete ekleme gibi işlemler yapılabiliyor. Sepet kısmında sepee eklenen ürünlerin bilgileri, sepetin toplam tutarı gibi bilgiler görülüyor. İstenirse alışverişe devam edilebilir, sepetten istenilen ürünler veya hepsi silinebilir. Sepet boşsa bizi sepetin boş olduğunu gösteren bir ekran gösteriliyor.

