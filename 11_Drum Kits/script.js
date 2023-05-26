

const elements = [
    { el: document.getElementById("snare"), audio: document.getElementById("snareA") },
    { el: document.getElementById("kick"), audio: document.getElementById("kickA") },
    { el: document.getElementById("crash"), audio: document.getElementById("crashA") },
    { el: document.getElementById("tom"), audio: document.getElementById("tomA") }
  ];
  
  elements.forEach((item) => {
    item.el.addEventListener("click", () => {
      item.el.appendChild(item.audio);
      item.audio.play();
    });
  });
  window.addEventListener("keydown",(event)=>{
console.log(event);
  });
























  // const snareEl = document.getElementById("snare");
// const kickEl = document.getElementById("kick");
// const crashEl = document.getElementById("crash");
// const tomEl = document.getElementById("tom");
// const snareAudio = document.getElementById("snareA");
// const kickAudio = document.getElementById("kickA");
// const crashAudio = document.getElementById("crashA");
// const tomAudio = document.getElementById("tomA");




// // izlenme olayları
// snareEl.addEventListener("click", () => {
//     snareEl.appendChild(snareAudio);
//     snareAudio.play();
// });
// kickEl.addEventListener("click", () => {
//     kickEl.appendChild(kickAudio);
//     kickAudio.play();
// });
// crashEl.addEventListener("click", () => {
//     crashEl.appendChild(crashAudio);
//     crashAudio.play();
// });

// tomEl.addEventListener("click", () => {
//     tomEl.appendChild(tomAudio);
//     tomAudio.play();
// });

