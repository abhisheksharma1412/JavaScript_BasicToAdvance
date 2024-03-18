const heading1=document.querySelector(".heading-1");
const heading2=document.querySelector(".heading-2");
const heading3=document.querySelector(".heading-3");
const heading4=document.querySelector(".heading-4");
const heading5=document.querySelector(".heading-5");
const heading6=document.querySelector(".heading-6");
const heading7=document.querySelector(".heading-7");

function changeText(element,text,color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }
            else{
                reject("something went wrong");
            }
        },delay)
        
    })
}


changeText(heading1,"Heading 1","red",1000)
.then(()=>changeText(heading2,"Heading 2","purple",1000)
).then(()=>changeText(heading3,"Heading 3","green",1000))
.then(()=>changeText(heading4,"Heading 4","yellow",1000))
.then(()=>changeText(heading5,"Heading 5","pink",1000))
.then(()=>changeText(heading6,"Heading 6","brown",1000))
.then(()=>changeText(heading7,"Heading 7","cyan",1000))
 .catch((error)=>alert(error))