//sets are iterables
//set is also used to store data
//sets are not following index mechanism
//sets are unordered


const s1=new Set([1,2,3,4,5,6,7,8,9]);
// console.log(s1);
// console.log(s1[2]); //==>no index based access
// console.log(typeof s1)

// for(let i of s1){
//     console.log(i);
// }

const s2=new Set("abcd");
// console.log(s2);

//===> dublicates are not allowed in set
const s3=new Set([1,2,3,3,2,1]); //==>1,2,3
// console.log(s3);

const s4=new Set();
s4.add(1);
s4.add(2);
s4.add([1,2,3]); //==>they both are allowed because they have different memory location
s4.add([1,2,3]);
// s4.add(s1);
// s4.add(s2);
// console.log(s4);
// console.log(s4.has(2));
// if(s4.has(20)){
//     console.log("20 is present")
// }
// else{
//     console.log("20 is not present")
// }

//suppose you have array and it has some dublicate elements and your tast is not print all the unique elements
//so you can place that array inside the set

const arr=[1,2,2,3,4,5,3,3];
const s5=new Set(arr);
console.log(s5);





