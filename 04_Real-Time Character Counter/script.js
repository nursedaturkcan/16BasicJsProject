const textAreaEl=document.getElementById("textarea");
const totalCounterEl=document.getElementById("total-counter");
const remainingCounterEl=document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup",()=>{
//! console.log("key is pressed");
updateCounter();
});
function updateCounter(){
    // textareanın değerinin uzunluğu totalcounterın iççeriğine atandı.
 totalCounterEl.innerText = textAreaEl.value.length;
 remainingCounterEl.innerHTML=  textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;

};



