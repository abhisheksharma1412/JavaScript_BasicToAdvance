//spread operator

const arr1=[1,2,3];
const arr2=[5,6,7];

//array cloning 
//speard operator is majorly used in array cloning

const arr3=[...arr1,...arr2,3,5,7];
// console.log(arr3);

//inside an object no two keys are same 
//spread operator is case of object
const obj1={
    key1:"val1",
    key2:"val2"
}

const obj2={
    key3:"val3",
    key4:"val4"
};

const obj3={...obj1,...obj2};

// console.log(obj3);


//another way of cloning is Object.assign()

const obj4=Object.assign({},obj1,obj2);
console.log(obj4)
