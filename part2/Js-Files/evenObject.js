const container=document.querySelectorAll(".container button");

//when event listener is added on any element then--:
//Js-Engine executes JS code line by line
//Browser have Js-Engine + Some extra feattures (webAPI)

//when browser knows that a particular event is performed then browser perform two important tasks 

//1=> It gives callBack function to Js-engine
//2=> It also gives information about the event which is performed , in the form of object

//when we perform any event then in callback function browser passes that event as default argument inside that function. 


//till now we have learned 

for(let button of container){
    button.addEventListener("click", (event)=>{  //function(event)they both same
        console.log(event.target);
    })
}

// for(let button of container){
//     button.addEventListener("click", function(){  //function(event)they both same
//         console.log(`you clicked ${button.textContent}`);
//     })
// }