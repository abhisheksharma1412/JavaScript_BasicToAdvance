//firstly we undersrtand it with small example 
// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2={
//     key3:"value3"
// }

// console.log(obj2.key3);
// console.log(obj2.key);  //undefined
//but want suppose the key that i wanna access JS first check it into my object but if this key is not present inside my object(obj2) than JS check into obj1
const obj1={
    key1:"value1",
    key2:"value2"
}

//Object.create() establish a connection(__proto__) between obj1 and obj2
//now if any key is that i want to access, JS firstly check it inside my obj2 if it is not present inside my object than it check it into obj1


//   //{}  with [[Prototype]]==>key1:"value1",key2:"value2"



//__proto__ and [[Prototype]] are same

// obj2.key3="value3";

// console.log(obj2.key3); //value3
// console.log(obj2.key1); //value1





//now come to main thing


const userMethods={
    about: function(){
        return `${this.firstName} is ${this.age} years old}`
    },
    is18:function(){
        return this.age>=18;
    },
    isSing(){
        return 'ooo yeahhhh'
    }

}
const detail= (firstName,lastName,email,age,address)=>{
    const user=Object.create(userMethods); //using Object.create()
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address

// user.about=userMethods.about;// no need of both of them 
//    user.is18=userMethods.is18;

   return user;
}

const user1=detail("Hardik","sharma","abc@gamil.com",2,"Ramnagar");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user1.isSing());