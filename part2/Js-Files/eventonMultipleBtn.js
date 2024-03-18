const container=document.querySelectorAll(".container button");

for(let button of container){
    button.addEventListener("click", function(){
        console.log(`you clicked ${button.textContent}`);
    })
}