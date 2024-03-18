const childDiv=document.querySelector(".child");
const parent=document.querySelector(".parent");
const grandparent=document.querySelector(".grandparent");
const body=document.body;

//Event Capturing
//Event Capturing Happens from Parent to child.
//when you add event with the help of addEventListnener() then in that case normally you pass two argument one is event that you to perform and second callBack, but there is also a third argument for Event Capturing which is a boolean value, if yo set it to true then event will Capture else Event will not Capture
childDiv.addEventListener("click",()=>{
    console.log("child capture");
},true)
parent.addEventListener("click",()=>{
    console.log("parent capture");
},true)
grandparent.addEventListener("click",()=>{
    console.log("grandparent capture");
},true)

body.addEventListener("click",()=>{
    console.log("body capture");
},true)


//Event bubbling
//Event bubbling is happenes from child to
//if you have child-parent relationship, and you have applied same type of event at each level then in that case if you perform that event on lowest level it will perform at each level bydefault====> example below
childDiv.addEventListener("click",()=>{
    console.log("child click");
})
parent.addEventListener("click",()=>{
    console.log("parent click");
})
grandparent.addEventListener("click",()=>{
    console.log("grandparent click");
})

body.addEventListener("click",()=>{
    console.log("body click");
})


//Event Capturing and Event Bubbling is basically a cycle capturing is from parent to child and Bubbling is from child to parent

