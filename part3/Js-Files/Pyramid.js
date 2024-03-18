const heading1=document.querySelector(".heading-1");
const heading2=document.querySelector(".heading-2");
const heading3=document.querySelector(".heading-3");
const heading4=document.querySelector(".heading-4");
const heading5=document.querySelector(".heading-5");
const heading6=document.querySelector(".heading-6");
const heading7=document.querySelector(".heading-7");

//CALL BACK HELL
//IT IS REALLY VERY DIFFICULT TO READ THAT CODE 
// setTimeout(()=>{
//     heading1.textContent="Heading 1"
//     heading1.style.color="pink";
//         setTimeout(()=>{
//             heading2.textContent="Heading 2"
//             heading2.style.color="yellow";
//             setTimeout(()=>{
//                 heading3.textContent="Heading 3"
//                 heading3.style.color="purple";
//                 setTimeout(()=>{
//                     heading4.textContent="Heading 4"
//                     heading4.style.color="green";
//                     setTimeout(()=>{
//                         heading5.textContent="Heading 5"
//                         heading5.style.color="grey";
//                         setTimeout(()=>{
//                             heading6.textContent="Heading 6"
//                             heading6.style.color="orange";
//                             setTimeout(()=>{
//                                 heading7.textContent="Heading 7"
//                                 heading7.style.color="brown";
//                             },1000)
//                         },1000)
//                     },2000)
//                 },1000)
//             },2000)
//         },1000)
// },1000);


//PYRAMID OF DOOM

function changeColor(heading,text,Color,delay,onSuccess,onFailour){
    setTimeout(()=>{
        heading.textContent=text;
        heading.style.color=Color;

    if(onSuccess){
        onSuccess();
    }
    else{
        onFailour();
    }
},delay)
};


changeColor(heading1,"Heading 1","pink",1000,()=>{
    changeColor(heading2,"Heading2","purple",1000,()=>{
        changeColor(heading3,"Heading 3","brown",1000,()=>{
            changeColor(heading4,"Heading 4","blue",1000,()=>{
                changeColor(heading5,"Heading 5","yellow",1000,()=>{
                    changeColor(heading6,"Heading 6","grey",1000,()=>{
                        changeColor(heading7,"Heading 7","cyan",1000,()=>{

                        },()=>{console.log("Heading 1 does not exist")})
                    },()=>{console.log("Heading 6 does not exist")})
                },()=>{console.log("Heading 5 does not exist")})
            },()=>{console.log("Heading 4 does not exist")})
        },()=>{console.log("Heading 3 does not exist")})
    },()=>{console.log("Heading 2 does not exist")})
},()=>{console.log("Heading 1 does not exist")})
