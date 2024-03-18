const sum=(num1,num2,num3=0)=>{
    return num1+num2;
}


// const totalthree=sum(2,5,4);
// console.log(totalthree);

// const total=sum(2,3);
// console.log(total);

const isEven=num=>{num%2===0}


// const evenOrNot=isEven(5);
// console.log(evenOrNot);

const takeArr=(arr,target)=>{
    let i=0;
    for(let ele of arr){
        if(ele===target){
            return i;
        }
        i++;
    }
    return -1;
}

const arr=[1,2,3,4,5]
const ans=takeArr(arr,1);
console.log(ans);


