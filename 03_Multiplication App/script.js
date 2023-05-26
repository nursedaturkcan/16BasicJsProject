// 1 ile 10 arasında rastgele sayıların üretilmesi
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
//! console.log(num1);
//! console.log(num2);

const questionEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");
const trueFalseEl=document.getElementById("truefalse");

trueFalseEl.style.display="none";
// lokal storagedan scorun alınıp int e dönüştürülmesi
let score= JSON.parse(localStorage.getItem("score"));
// local storage da herhangibir score yok ise 0 a ayarlamak
if(!score){
    score=0;
}





questionEl.innerText=` What is ${num1} multiply by ${num2}?`;
scoreEl.innerText=`Score: ${score}`;

const correctAnswer=num1*num2;

formEl.addEventListener("submit",()=>{
const userAnswer=Number(inputEl.value);
if(userAnswer==correctAnswer){
score++;
trueFalseEl.innerText="True";
trueFalseEl.style.display="block";


updateLocalStorage()


}
else{
    score--;
    trueFalseEl.innerText="False!";
    trueFalseEl.style.color="red";
    
   
    updateLocalStorage()
}
});


// sayfa yenilendiğinde score'un kaybolmaması için
function updateLocalStorage(){
    // local storage a scorun stringe çevirilip aktarılması
    localStorage.setItem("score",JSON.stringify(score));
}






