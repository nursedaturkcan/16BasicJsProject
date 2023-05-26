const btnEl=document.querySelector(".btn");
const closeIconEl=document.querySelector(".close-icon");
const trailerContainerEl=document.querySelector(".trailer-container");
const videoEl=document.querySelector("video");
// izlenme olayı
btnEl.addEventListener("click",()=>{
// active classının kaldırılması
trailerContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click",()=>{
trailerContainerEl.classList.add("active");
//!videoyu kapatılmasına rağmen arka planda oynamaya devam ediyor. Onu engellemek için;
videoEl.pause();
videoEl.currentTime=0;
});