const loadBtn=document.querySelector(".btn");
const imageContainerEl=document.querySelector(".image-container");

loadBtn.addEventListener("click",()=>{
    imageNumber=10;
addNewImages();
});

function addNewImages(){
    // şimdi her tıklamada 10 yeni resim üretecek
    for (let index = 0; index < imageNumber; index++) {
        // bu fonksiyon her tıklamada sadece 1 resim ekliyor o yüzden loop a alacağız
    const newImg=document.createElement("img");
    newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImg);
      
    }
   
}
const sayi1=Math.random(5);
console.log(sayi1);

