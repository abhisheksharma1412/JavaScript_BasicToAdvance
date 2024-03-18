const child=(name)=>{
    console.log(`my name is ${name}`);
}

const parent=(callBack)=>{
    console.log("i want to access callBack")
   child("Abhishek");
}

parent(child);