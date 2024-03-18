const container=document.querySelectorAll(".container button");

// for(let button of container){
//     button.addEventListener("click", function(){
//         console.log("you clicked me");
//         //in case of normal function the value of this is the element who performs event
//         console.log(this)
//     })
// }

//arrow function

for(let button of container){
    button.addEventListener("click", ()=>{
        console.log("you clicked me");
        //in case of arrow function the value of this is window object
        console.log(this)
    })
}