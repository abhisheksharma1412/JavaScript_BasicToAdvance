const URL="https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then(response=>{
//     if(response.ok){
//     return response.json()
//     }
//     else{
//         console.log("else")
//         throw new Error("something went rong")
//     }
// }
// )
// .then(data=>{console.log(data)})
// .catch(()=>{
//     //by default this catch block is only run when internet is disconnected
//     console.log("inside catch")
// })

fetch(URL, {
    method:"POST",
    body:JSON.stringify({
    title:'foo',
    body:'bar',
    userID:1
}),
    headers:{
        'Content-type': 'application/json; charset=UTF-8' 
    }
})
.then(response=>response.json())
.then(data=>{console.log(data)})