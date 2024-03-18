//array is collection of elements
//array stores elements in contigious memory location
//array is a linear data structure


//speard operator
const myArr=[..."Hardik"];

console.log(myArr);
const Name=["Hardik","Urvashi","Manisha","Arjun"];
console.log(Name);

// const[val1,val2,val3,val40]=Name;
// console.log(val2);

// for(let i=0;i<Name.length;i++){
//     console.log(Name[i]);
// }


//This is most important loop in case of an array
// for(let name of Name){
//     console.log(name);
// }

for(let name in Name){
    console.log(Name[name]);
}