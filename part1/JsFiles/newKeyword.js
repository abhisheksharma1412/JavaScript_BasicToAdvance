function createUSer(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

//when we create function with the help of new keyword than there is no need of Object.create()
//new perform three task for us
//1=> this{}   empty object
//2=>return this object
//3=>remove the need of object.create()



createUSer.prototype.about=function about(){
    return ("Hey, Hardik here")
}
// const user1=new createUSer("Hardik",23);
// console.log(user1)
// console.log(user1.about())





//now we apply new in our previous code

const Detail= function(firstName,lastName,email,age,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
}

Detail.prototype.about= function(){
    return `${this.firstName} is ${this.age} years old}`
}

Detail.prototype.is18=function(){
    return this.age>=18;
}

Detail.prototype.isSing=function isSing(){
    return 'ooo yeahhhh'
}



const user2=new Detail("Hardik","sharma","abc@gamil.com",2,"Ramnagar");
console.log(user2);
console.log(user2.is18());
console.log(user2.about());
console.log(user2.isSing());