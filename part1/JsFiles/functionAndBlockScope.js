//var has function scope
//let and const has block scope

// var myvar=20;
const myFunc=()=>{
    var myvar=10;
    
    function child(){
        let myvar=5;
    for(let myvar1=1;myvar1<5;myvar1++){
        console.log(myvar);
    }
    console.log(myvar);
    }
    child();

    // function child(){
    //     var myvar1=1;
    //     console.log(myvar1);
    // }

// child();
// console.log(myvar1);
}

// myFunc();

// {
//     const firstname="Hardik";
//     console.log(firstname);
// }

// {
//     const firstname="Urvashi";
//     console.log(firstname);
// }

// {
//     let myvar=20;
// }
//     console.log(myvar); //error
// {
//     const myvar=10;
// }
//     console.log(myvar); //error

{
    var myvar=30;
}
    console.log(myvar);   // run sucessfuly