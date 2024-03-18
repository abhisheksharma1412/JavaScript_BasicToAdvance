const URL="https://jsonplaceholder.typicode.com/posts";

const sendRequest=(method,url)=>{

    return new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();

    xhr.open(method,url);

    xhr.onload=()=>{

        if(xhr.status>=200 && xhr.status<300){
        resolve(xhr.response);
        }
        else{
            reject(new Error("Something Went Wrong"));
        }
    }

    xhr.send();
})
}

sendRequest("GET",URL)
.then((response)=>{
    const data=JSON.parse(response)
    console.log(data)

    return data;
})
.then((data)=>{
    const id=data[3].id;
    return id;
})
.then((id)=>{
    const url2=`${URL}/${id}`;
   return sendRequest("GET",url2);
})
.then((newResponse)=>{
    console.log(JSON.parse(newResponse))
})
.catch((error)=>console.log(error))
