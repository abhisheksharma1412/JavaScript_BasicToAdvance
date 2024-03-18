const obj1={
    key1:"val1",
    key2:"val2",
    key3:"val3"
};

// const{var1,var2}=obj1; // it gives us undefined because it is not the proper syntex
// console.log(var1);
//by default it takes orignal name of keys


const{key1:var1, key2:var2}=obj1; // it gives us undefined because it is not the proper syntex
console.log(var1);
console.log(var2);


