//map function return the new array
//for map function it is mandatory to return the value 
//if you not return the value(using console.log) than undefined is return 

const arr=[3,4,5,6,7];

// const myFunc=(number,index)=>{
//         // console.log(`index is ${index}`, `number is ${number}`);
//     //    return (`index is ${index} number is ${number}`);
//     // console.log(number*2);
//     return number*2;
// }

// const num=arr.map((number,index)=>{
//     return number*2;
// });
// console.log(num);

const person=[
    {firstname:"Hardik", gender:"Male"},
    {firstname:"Abhishek", gender:"Male"},
    {firstname:"Urvashi", gender:"Female"},
    {firstname:"Himanshi", gender:"Female"},
]

const detail=person.map(({firstname,gender})=>{
    return firstname;
})
console.log(detail)