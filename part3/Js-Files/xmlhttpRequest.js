const URL="https://jsonplaceholder.typicode.com/posts";

const xhr=new XMLHttpRequest();
// console.log(xhr.readyState);    //0  UNSENT

xhr.open("GET",URL);
// console.log(xhr.readyState);    //1     OPENED

// xhr.onreadystatechange=(()=>{
//    // console.log(xhr.readyState) //2=HEADER_RECIEVED(send has been called),3=LOADING,4=DONE(MDN)
//     if(xhr.readyState==4){
//        const response= xhr.response;
//         const data=JSON.parse(response)
//         console.log(data)
//     }
// })



//this onLoad Function is only called when readystate becomes 4
xhr.onload=()=>{
    const response= xhr.response;
            const data=JSON.parse(response);
            console.log(data);
}

xhr.send();