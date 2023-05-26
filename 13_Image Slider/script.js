const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imageContainerEl=document.querySelector(".image-container");
const imgsEl=document.querySelectorAll("img");
let currentImg=1;
let timeout;

nextEl.addEventListener("click",()=>{
currentImg++;
clearTimeout(timeout);
updateImg();
});
prevEl.addEventListener("click",()=>{
currentImg--;
clearTimeout(timeout);
updateImg();
});
updateImg();


function updateImg(){
    if(currentImg>imgsEl.length){
        // 4ü geçtikten sonra tekrar 1.resme gelmesi için 
        currentImg=1;
        // 1.resimdeyken geriye bastığında tekrar 4.resme gelmesi için
    }else if(currentImg < 1){
        currentImg=imgsEl.length;
    }
    // her bir img width 500px olduğu için 500 ile çarpıldı
  imageContainerEl.style.transform=`translateX(-${(currentImg-1)*500}px)`

//   herhangibir tıklama olmasa bile kendiliğinde 3 sn de bir resim değişmesi için
timeout=setTimeout(()=>{
currentImg++;
updateImg();
},3000)
        
    

};