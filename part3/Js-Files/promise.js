console.log("Hardik sharma")

const bucket=["coffee","vegetable","salt","rice"];


//this code is handled by browser or you can say Promises are handeled by browser

//and after excuting browser save the promise inside the microTaskQueue;
//setTimeout and setInterval method store inside the callback queue
//microTaskQueue have high preference as compared  to callbackQueue;
const friedRicePromise=new Promise((resolve,reject,)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Majaa he aa gyaa");
    }
    else{
        reject("Bhuk lagi hai bhai");
    }
});

//after executing promise setTimeout code will execute
setTimeout(()=>{
    console.log("setTimeout")
},0);


//this code will execute first 
friedRicePromise.then((hogyaa)=>{
    console.log(hogyaa);
}).catch((nhiHua)=>{
    console.log(nhiHua)
})



console.log("Abhishek sharma")