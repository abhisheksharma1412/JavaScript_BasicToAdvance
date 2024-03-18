// function myfunc(a,b,...c){      //c is rest parameter
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(Array.isArray(c));
// }

// myfunc(1,2,4,5,6,7,8,9,1,2,3,4,5,5);


const addAll=(...numbers)=>{
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    return sum
}

console.log(addAll(1,2,3,4,5));