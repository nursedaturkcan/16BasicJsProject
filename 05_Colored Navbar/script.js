const navbarEl=document.querySelector(".navbar");
const bottomContainerEl=document.querySelector(".bottom-container");
//* pencere scroll olduğunda
window.addEventListener("scroll",()=>{
    //* rengin değişeceği px li belirlemek için 700px de değişeceğine karar verdim
//! console.log(window.scrollY);
if(window.scrollY>700){
    navbarEl.classList.add("active");
}else{
    navbarEl.classList.remove("active");
}

});