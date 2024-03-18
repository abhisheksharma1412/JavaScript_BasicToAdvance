//funtion which e define inside objects is known as method.
//or you can say the funtions which work on objects is known as methods

//i am declaring function outside just for improving its readability, 

function myFunct(){
    //this is self referencing pointer , this will refer to the object which is currently calling
    //i can also define this function inside each object. 
    console.log(`Hey, this is ${this.Name} sharma, my is age is ${this.age}`)   
 }
const obj={
    Name:"Hardik",
    age:23,
    about: myFunct
}
const obj2={
    Name:"Urvashi",
    age:23,
    about: myFunct
}
const obj3={
    Name:"Abhishek",
    age:23,
    about: myFunct
}

//console.log(obj.about());
obj.about();
obj2.about();
obj3.about();


//small syntax
// const obj5={
//     Name:"Hardik",
//     age:23,
//     about() {
//         console.log(`Hey, this is ${this.Name} sharma, my is age is ${this.age}`)   
//     }
// }

