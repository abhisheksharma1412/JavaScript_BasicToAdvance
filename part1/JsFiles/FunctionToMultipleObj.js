// const user={
//     firstName:"Hardik",
//     lastName:"sharma",
//     email:"abhisheksharma@gmail.com",
//     age:22,
//     address:"Ramnagar",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old}`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// };

//suppose like this object i want millions of obj , but it is not possible to create them separatly
//So, for that we need method in which we have to just pass the user detail and these details get stored into memory

//function (that function create obj and add key-value pair and return object)

// const detail= (firstName,lastName,email,age,address)=>{
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old}`;
//     };
//     user.is18=function(){
//         return this.age>=18;
//     };

//     return user;
// }

// const user1=detail("Hardik","sharma","abc@gamil.com",2,"Ramnagar");
// console.log(user1);
// const is18=user1.is18();
// console.log(is18);

//but i above function there is one problem, for each call new methods(about, is18) are creating, 

//so for removing that issue i can store these methods into separate



const userMethods={
    about: function(){
        return `${this.firstName} is ${this.age} years old}`
    },
    is18:function(){
        return this.age>=18;
    }
}
const detail= (firstName,lastName,email,age,address)=>{
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address

    //now for each user searate methods are not createing ,im just using the method reference, method is same just it is refer by the multiple reference
   user.about=userMethods.about;
   user.is18=userMethods.is18;

   return user;
}

const user1=detail("Hardik","sharma","abc@gamil.com",2,"Ramnagar");
console.log(user1);
const is18=user1.is18();
console.log(is18);

//even in our code there is one more issue, like if there are huge number of methods than we have to write them, suppose if we forget to write them problem will arise,  which we solve using Object.create()

