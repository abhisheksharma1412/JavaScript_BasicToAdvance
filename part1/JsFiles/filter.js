//filter method is used to filter the element to elements from array
//for filter method callBack method must bt boolen type
//filter method also return new array
//it return array of those element which satisfy the condition of callBack function 


const arr=[1,2,3,6,8,5,9,8];

const isEven=(number)=>{
        return number%2===0;
}

const even=arr.filter(isEven);
console.log(even);