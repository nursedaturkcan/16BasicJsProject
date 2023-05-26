const backgroundImageEl=document.getElementById("bg-image");
window.addEventListener("scroll",()=>{
updateImage();
});
function updateImage(){
    //!pageoffsetY çok büyük bir sayı olduğu için 800 e böldüm. 
backgroundImageEl.style.opacity=1-window.pageYOffset /800;
// !zoom ayarı
backgroundImageEl.style.backgroundSize=160-window.pageYOffset/20 +"%";
};