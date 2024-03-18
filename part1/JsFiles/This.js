//tell if i try to print this in global scope than what will print

// console.log(this); //window object
// console.log(window); 
//in global scope this==window




//suppose if i make mwthod in global scope and inside it i try to print this

function myFunc(){
    console.log(this);  //window obj
}
myFunc();
//now question is initially we print this in global scope so it is equal to window,
//but now we are try to print it in method scope, so why it result in window object
window.myFunc();
function myFunc(){
    console.log(this);  //window obj
}
window.myFunc();

//both of above mwthods result in same output
//in this method scope this is window because as we nknow this is refer to the object which is currently calling 
//so window is calling currently that's why this is equal to window



//but sometime this about thing creates problem,
//so. to resolve this issue developers use 'use strict'

function myFunc(){
    'use strict'
    console.log(this);  //undefined
}
window.myFunc();
