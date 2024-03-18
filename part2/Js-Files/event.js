let container=document.querySelectorAll(".container button");
container=Array.from(container)
console.log(Array.isArray(container))
// const div=document.querySelector(".container");

let [btn1,btn2,btn3]=container;

// console.log(Array.isArray(btn1))

btn1.addEventListener("click",function(){
    document.body.style.backgroundColor="purple";
})
btn2.addEventListener("click",function(){
    document.body.style.backgroundColor="pink";
})
btn3.addEventListener("click",function(){
    document.body.style.backgroundColor="brown";
})

