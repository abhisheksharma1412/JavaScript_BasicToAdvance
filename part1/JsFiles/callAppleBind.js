const obj1={
    Name:"Hardik",
    age:23,
    about: function(){
        console.log(`Hey, this is ${this.Name} sharma, my is age is ${this.age}`); 
    }
}
const obj2={
    Name:"Urvashi",
    age:23
}

// obj1.about(); //correct

//but if i want to call it for obj2?, it will return an error
//but i want to call it for obj2

//for such uses we use call, apply and bind

//call

// obj1.about.call(obj2); //correct


const obj3={
    Name:"Hardik",
    age:23,
    about: function(hobby, strength){
        console.log(`Hey, my hobby is ${hobby} , my strength is ${strength}`); 
    }
}
const obj4={
    Name:"Urvashi",
    age:23
}


//if function recieves an arguments

// obj3.about("guitar", "positive mindset");

// obj3.about.call(obj4, "coding", "problem solving")



//apply
//apply is same as call, but the difference is for extra parameter it pass them as array
//  obj3.about.apply(obj4, ["guitar","positive mindset"])

 //if this about method is outside the obj than
 //about.call(obj4, ["guitar","positive mindset"]);


 //bind method syntax is same as call, but the difference is it return function

//  obj3.about.bind(obj4, "coding", "problem solving"); //no output you have to store it inside other variable

const func=obj3.about.bind(obj4, "coding", "problem solving")

func(); //output