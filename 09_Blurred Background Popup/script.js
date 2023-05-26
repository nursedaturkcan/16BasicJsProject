const containerEl=document.querySelector(".container");
const btnClickEl=document.querySelector(".btn");
const popupContainerEl=document.querySelector(".popup-container");
const closeIconEl=document.querySelector(".close-icon");
popupContainerEl.appendChild(closeIconEl);

// izlenme 
btnClickEl.addEventListener("click",()=>{
containerEl.classList.add("active");
popupContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click",()=>{
popupContainerEl.classList.add("active");
containerEl.classList.remove("active");
});