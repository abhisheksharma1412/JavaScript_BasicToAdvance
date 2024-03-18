const ricePromise=()=>{
    
const bucket=["coffee","vegetable","salt","rice"];

return new Promise((resolve,reject,)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Majaa he aa gyaa");
    }
    else{
        reject("Bhuk lagi hai bhai");
    }
});
}

ricePromise().then((hogyaa)=>{
    console.log(hogyaa);
}).catch((nhiHua)=>{
    console.log(nhiHua)
})