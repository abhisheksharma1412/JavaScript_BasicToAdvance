//find methd is used to find the element inside the array which satisfy the callBack condition
//if there  is more than one element inside the array which fulfill the condition but find method only return the single element
//which fulfill the condition  first
//find method not return array 
//it only return element which satisfy the condition

const arr=["Hardik","abhi","urvi","himanshi"];


// function len(str){
//         return str.length===8;
// }
// const res=arr.find((str)=>str.length===4);

// console.log(res);

const users=[
    {userID:1, userName:"Hardik"},
    {userID:2, userName:"Abhishek"},
    {userID:3, userName:"Urvashi"},
    {userID:4, userName:"Himanshi"},
    {userID:5, userName:"Jayant"},
];

const res=users.find((a)=> a.userID===3);
console.log(res);

