//forEach loop is used to traverse the array 
//forEach accept callBack function as an argument
//you can also create anonmouous function as an argument
//you can also create arrow function as an argument



const arr=[1,2,3,4];

//1 one way

const func=(number,index)=>{

    console.log(`index is ${index}`,`number is ${number}`);
    
    // for(let i=0;i<arr.length;i++ )
    // console.log(arr[i]);
    // for(let a of arr){
    //     console.log(a);
    // }
}

const num= arr.forEach(func);
console.log(num);

//another way or more technical way

// arr.forEach(function(number,index){
//     console.log(`index is ${index}`,`number is ${number}`);
// })


const person=[
    {firstname:"Hardik", gender:"Male"},
    {firstname:"Abhishek", gender:"Male"},
    {firstname:"Urvashi", gender:"Female"},
    {firstname:"Himanshi", gender:"Female"},
]

// person.forEach(function({firstname,gender}){
//     console.log(firstname, gender);
// })

// person.forEach(({firstname,gender})=>{
//     console.log(firstname, gender);
// })