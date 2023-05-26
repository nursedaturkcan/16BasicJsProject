// tüm panellere erişim
const panels=document.querySelectorAll(".panel");
// panellerde gezinme
panels.forEach(panel=>{
// panel click olduğu zaman
panel.addEventListener("click",()=>
{
    removeActive();
    // panele active classının eklenmesi
    panel.classList.add("active");
    
})
});
// önceki active classının silinmesi
function removeActive(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}