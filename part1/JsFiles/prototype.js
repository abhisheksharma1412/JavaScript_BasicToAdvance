//In JS function is not just a function 
// in JS functiion is a combination of 
//function===> function + object

//There is some extra space provided by JS
//this extra space is the empty object 
//which is known as Prototype
//__proto__([[Prototype]]) and prototype  are two different things
//only function provide prototype propert




// function hello(){
//     console.log("Hello world")
// }
// hello.prototype.key1="value1";
// hello.prototype.key2="value2";
// hello.prototype.key3=function about(){
//     console.log("hy i'm Hardik Sharma")
// }
// console.log(hello.prototype);




//now we improve our privious code ,
//from which we remove the userMethods object, and all of its mwthod we add in functions prototype


//arrow function don't have prototype



// const userMethods={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old}`
//     },
//     is18:function(){
//         return this.age>=18;
//     },
//     isSing(){
//         return 'ooo yeahhhh'
//     }
// }



const detail= function(firstName,lastName,email,age,address){
    const user=Object.create(detail.prototype); //using Object.create()
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;

// user.about=userMethods.about;// no need of both of them 
//    user.is18=userMethods.is18;

   return user;
}

detail.prototype.about= function(){
    return `${this.firstName} is ${this.age} years old}`
}

detail.prototype.is18=function(){
    return this.age>=18;
}

detail.prototype.isSing=function isSing(){
    return 'ooo yeahhhh'
}



const user1=detail("Hardik","sharma","abc@gamil.com",2,"Ramnagar");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
console.log(user1.isSing());
