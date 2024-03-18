// const mainHeading = document.getElementById("main-heading");
// console.dir(a); //for complete description
//console.log(mainHeading);

// const navItem=document.getElementsByClassName("nav-item");
// console.log(navItem.length)

// const mainHeading=document.querySelector("#main-heading")
// console.log(mainHeading);

//innerHTML
//  document.getElementById("main-heading").innerHTML+="<h1>Hardik sharma</h1>";


//textContent  innerText
// const mainHeading=document.querySelector("div.headline h2")
// console.log(mainHeading.textContent);
//it show entire content(both visible or invisible)
// mainHeading.textContent="Hardik sharma";

//it show only visible content
// mainHeading.innerText="Hardik Sharma";

//style
//  const mainHeading=document.querySelector("#main-heading")
// mainHeading.style.color="blue";
// mainHeading.sty le.backgroundColor="purple"

// const learnButton=document.querySelector(".btn-headline");/

// document.body.addEventListener("keypress",(event)=>{
//     console.log(event)
// })

// learnButton.addEventListener("mouseover",()=>{
//     console.log("hogya over")
// })
// learnButton.addEventListener("mouseleave",()=>{
//     console.log("hogya leave")
// })


const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type=text]")
const todoList=document.querySelector(".todo-list");

todoForm.addEventListener("submit",()=>{
    const newLi=document.createElement("li");

    const newLiInnerHTML=`
    <span class="text">${todoInput.value}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
    `
    newLi.innerHTML=newLiInnerHTML;
    todoList.append(newLi)
    todoInput.value="";
})


todoList.addEventListener("click",(event)=>{
    if(event.target.classList.contains('done')){
       const spanSibling=event.target.parentNode.previousElementSibling;
       spanSibling.style.textDecoration="line-through";
    }
    if(event.target.classList.contains('remove')){
        const targetedLi=event.target.parentNode.parentNode;
        targetedLi.remove()
     }

    // console.log(event.target.classList)
})



