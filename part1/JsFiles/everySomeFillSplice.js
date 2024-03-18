//every method
//it is a boolean function 
//it only returns true when all elements inside an array are satisfying the callBack condition

const arr=[2,4,6,8,10];


// const res=arr.every((num)=>num%2===0);
// console.log(res)

//some
//it is also a boolean function
//it return true when atleast single element inside an array satisfy  the callBack condition

// const res2=arr.some((num)=>num%2===0);
// console.log(res2);


//fill method
//fill method is used to fill the array with value
//like in java bydefault integer array valus is zero
//if we want to fill it with another value like (-1) than we have to start the loop 
//but in javaScript we can use fill method
//we can use fill method with object type array(the arraay which we create with the help of an new keyword)


const arr2=new Array(10).fill(-1);
// console.log(arr2);

//we can also use this on already created array
const arr3=[2,4,6,8,10];

//fill(value,start,end)===>end index is excluded 
arr3.fill(0,1,4);
// console.log(arr3);

//splice method
//start, delete, insert
const arr4=[2,4,6,8,10];

// arr4.splice(1,2);
// console.log(arr4); //[2,8,10]

arr4.splice(1,2,15,20);// [2,15,20,8,10]==>15,20 both are elements that you want to insert
console.log(arr4);
