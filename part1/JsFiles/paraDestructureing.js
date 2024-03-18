//it is majorly applies on object 
//it is very imporatant in react

const person={
    firstName:"Hardik sharma",
    gender:"male",
    age:23
}

// const myFunc=(person)=> {
//     console.log(person.firstName);
//     console.log(person.gender);
//     console.log(person.age);
// }

const myFunc=({firstName,gender,age})=> {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
myFunc(person);