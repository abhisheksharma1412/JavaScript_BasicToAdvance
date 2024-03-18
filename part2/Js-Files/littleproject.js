const button=document.querySelector(".colorchanger");
const span=document.querySelector(".color");
const body=document.body;


button.addEventListener("click",()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
   body.style.backgroundColor=`rgb(${red},${green},${blue})`;
   span.textContent=`rgb(${red},${green},${blue})`;
})


