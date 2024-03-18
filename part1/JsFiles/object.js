//object is also used to store xollection of values
//The only difference between onject and array is object stores the values in key value pair
// In real life example objects is used to store values like user  Information
//for creating and onject we use curly braces
//key(properties)=>value
//objet don't have index
//object is also reference type
//In objects no two keys are same, if you try to create two keys as same then last declaration is assigned to that key


const details={
    name: ["Hardik","Urvashi","Manisha"],
    rollnum: 223028002,
    age: 23,
    "person address": "Ramnagar colony "

}

// console.log(details.name);
// console.log(details.age);

//if you want to add key value pair explicitly
details.gender="male";

console.log(details);
// console.log(details);

//In objects we can access key value pairs by two ways
//1-> dot operator
// console.log(details.gender);

//not able to access person address
// console.log(details.person address);

//2-> bracket notation
// console.log(details["gender"]);

//one important use to bracket notation is suppose when name of key is more than single word then we are not able access it with dot notation
// example person address: Ramnagar colony

// console.log(details["person address"]);

//how to iterate on objects

for(let det in details){
    //  console.log(details[det]);
    // console.log(details.det); after doing that we get undefined
   // console.log(det ,'  :  ',details[det] );
    //template String 
    // console.log(`${det} : ${details[det]}`);
}


//to find all keys of an obejct
// console.log(Object.keys(details));
// console.log(Object.values(details));
console.log(Object.entries(details));

