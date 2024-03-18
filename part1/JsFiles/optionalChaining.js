// const users={
//     firstName:"Hardik",
//     address:{houseNumber:1234}
// }

// console.log(users);
// console.log(users.address);
// console.log(users.address.houseNumber);


//supose if i remove address and try to access the address 
// const users={
//     firstName:"Hardik",
//     // address:{houseNumber:1234}
// }

// console.log(users.address); //undefined
// console.log(users.address.houseNumber); //error
//but sometime in objects there are some condtion where at a particular time properties are not present inside the object but after sometime it will present so in such condition we dont want error we want undefined
//so for such condtion optional chaining is used

const users={
    firstName:"Hardik",
    // address:{houseNumber:1234}
}

console.log(users.address); //undefined
console.log(users?.address?.houseNumber); //undefined

//its main use is in nested objects