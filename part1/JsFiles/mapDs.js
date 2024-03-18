//maps
//maps are iterables

//map store data in ordered fashion

//store key value pairs(like objects)
//dublicates are not allowed like objects

//Difference between map and objects

//objects can have only string or symbols type of keys
//but in map keys can be of any datatype
//like string, number,array,objects etc.

const m1=new Map();
m1.set('userId',1);
m1.set('firstName','Hardik');
m1.set("age",23);
m1.set([1,2,3],"oneTwoThree");
m1.set({name:"blank"},"Abhishek");


const key=m1.keys();
// for(let k of m1.keys()){
//     console.log(k)
// }
//if you wants to print key value pair than you have to use array destructuring
for(let [k,v] of m1){
    console.log(k , v)
}
// console.log(m1);
//maps are iterables
// for(let i of m1){
//     console.log(m1);
// }