function sum(num1,num2,num3=0){
    return num1+num2;
}


const totalthree=sum(2,3,4);
console.log(totalthree);

const total=sum(2,3);
console.log(total);

function isEven(num){
    return num%2===0;
}

// const evenOrNot=isEven(5);
// console.log(evenOrNot);

function takeArr(arr){
    for(let ele of arr){
        console.log(ele);
    }
}

// const arr=[1,2,3,4,5]
// takeArr(arr);


