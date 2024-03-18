const body=document.body;
const btn=document.querySelector("button");


const intervalID=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
const rgb=`rgb(${red}, ${green}, ${blue})`;
    body.style.background=rgb;

},1000);


btn.addEventListener("click",()=>{
    clearInterval(intervalID);
    btn.textContent=body.style.background;
})