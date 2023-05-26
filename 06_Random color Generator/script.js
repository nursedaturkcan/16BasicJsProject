const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    // 30 adet div üretildi
    // Her bir div, .color-container sınıfını içerecek şekilde ayarlanıyor ve containerEl içine ekleniyor.
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        // Her bir colorContainerEl için randomColor() fonksiyonunu çağırarak yeni bir renk kodu oluşturulup
        //oluşturuluan renk kodlarını colorContainerEl elementinin arka planına atama
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function randomColor() {
    // karakterlerin oluşturulması
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}
/*İlk olarak, chars değişkeni "0123456789abcdef" şeklinde hekstir (hexadecimal) karakterlerini içerir. Bu karakterler, renk kodlarının oluşturulması için kullanılır.

colorCodeLength değişkeni, oluşturulacak renk kodunun kaç karakterden oluşacağını belirtir. Genellikle renk kodları altı karakterden oluşur, bu yüzden değer olarak 6 verilmiştir.

colorCode değişkeni, oluşturulan renk kodunu tutmak için kullanılır. Başlangıçta boş bir dize olarak tanımlanır.

for döngüsü, colorCodeLength değeri kadar tekrarlanır. Bu durumda 6 kez tekrarlanacak.

Her döngü adımında, Math.random() fonksiyonu kullanılarak 0 ile 1 arasında rastgele bir ondalık sayı üretilir. Bu sayı, chars.length ile çarpılarak 0 ile chars.length - 1 arasında bir sayı elde edilir. Bu sayı, chars dizisinin indekslerine karşılık gelir.
Örneğin, chars dizisinin uzunluğu 16 olsun. Math.random() fonksiyonu 0.73652384 gibi bir değer ürettiğinde, bu değeri Math.random() * chars.length ile çarparız:

0.73652384 * 16 = 11.78437744

Daha sonra, Math.floor() fonksiyonunu kullanarak bu değeri aşağıya yuvarlarız:

Math.floor(11.78437744) = 11

Elde ettiğimiz tamsayı olan 11, chars dizisinin 11. indeksine karşılık gelen karakteri temsil eder.

Bu işlem, Math.random() fonksiyonunun ürettiği ondalık sayıyı chars dizisinin indekslerine dönüştürerek, rastgele bir karakter seçmek için kullanılır. Bu sayede, randomColor() fonksiyonu her çalıştığında farklı bir karakter seçilerek renk kodunun farklı olmasını sağlar.

Math.floor() fonksiyonu, bu ondalık sayıyı aşağıya yuvarlayarak tamsayı bir indeks değeri elde edilir.

chars.substring(randomNumber, randomNumber + 1) ifadesi, chars dizisindeki randomNumber indeksindeki karakteri seçer. Bu karakter, colorCode değişkenine birer birer eklenir.

for döngüsü tamamlandığında, colorCode değişkeninde 6 karakterden oluşan bir renk kodu elde edilir.

Örneğin, aşağıdaki gibi bir senaryoda:

İlk döngü adımında randomNumber değeri 2 olarak seçilsin. Bu durumda chars.substring(2, 3) ifadesi ile "2" karakteri seçilir ve colorCode değişkenine eklenir.
İkinci döngü adımında randomNumber değeri 9 olarak seçilsin. Bu durumda chars.substring(9, 10) ifadesi ile "9" karakteri seçilir ve colorCode değişkenine eklenir.
Bu adımlar tekrarlanarak, colorCode değişkeninde 6 karakterden oluşan bir renk kodu elde edilir. Örneğin, "29c8a1" gibi bir renk kodu oluşabilir.
colorCode += chars.substring(randomNumber, randomNumber + 1); ifadesi, chars dizisinden rastgele seçilen bir karakteri colorCode adlı bir değişkene eklemek için kullanılır.

chars.substring(randomNumber, randomNumber + 1) ifadesi, chars dizisinden randomNumber indeksine karşılık gelen karakteri döndürür. substring() metodu, bir diziden belirli bir aralıktaki karakterleri almak için kullanılır.

Örneğin, chars dizisi "0123456789abcdef" şeklinde olsun ve randomNumber değeri 7 olsun. Bu durumda chars.substring(7, 7 + 1) ifadesi aşağıdaki gibi olur:

chars.substring(7, 7 + 1) => chars.substring(7, 8)

Bu ifade, chars dizisinin 7. indeksinden (dahil) 8. indeksine (hariç) kadar olan karakterleri alır. Yani, sadece chars[7] karakterini elde ederiz.

Elde ettiğimiz karakteri colorCode değişkenine eklemek için += operatörünü kullanırız. Bu operatör, colorCode değişkeninin mevcut değerine yeni karakteri ekler.

Örneğin, colorCode değişkeninin başlangıçta boş bir değeri olsun (colorCode = "") ve chars dizisinden rastgele seçilen bir karakter "9" olsun. colorCode += "9" ifadesi, colorCode değişkenine "9" karakterini ekler.

Bu işlem, randomColor() fonksiyonu her çalıştığında colorCode değişkenine yeni bir karakter ekleyerek, sonunda 6 karakterden oluşan bir renk kodu elde etmeyi sağlar.








*/