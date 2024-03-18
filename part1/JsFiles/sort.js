//it is very important method in javaScript
//it sort the array on the basis of ascii value because bydefault is consider each element as string
//example arr=[3,6,1,3,8] ====>  ['3','6','1','3','8']
//it is same as dictionary
//it return the same array
//in which we dont need to store our result inside the newarray
//you can see it in below example


// const arr=[3,8,1200,1000,1,4];
// arr.sort();
// console.log(arr);


//we can also sort our array like that because by doing this,
//out array is sorted in real order rather than ascii manner

// const arr=[3,8,1200,1000,1,4];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// a       b       return
// 3       8       3-8=-5              no change
// 8       1200    8-1200=negative     no change
// 1200    1000    1200-1000=200       swap
// 1000    1       1000-1=999          swap
// 1       4       1-4=negative        no change

//this above process continue until array is sorted
//its working is same as bubble sort




const userCart=[
    {productId:1,  productName:"Laptop", price:40000},
    {productId:2,  productName:"desktop" ,price:10000},
    {productId:3,  productName:"tv", price:100000}
    
]

// userCart.sort((a,b)=>a.price-b.price);
// console.log(userCart);

//as we know sort meethod return the same array 
//so if try to sort our user cart than is will our whole array but just want to sort my price
//so for that i can clone my array 

const lowToHigh=userCart.slice(0).sort((a,b)=>a.price-b.price);
console.log(lowToHigh);
//by doing this there is no effect on our orignal array because we clone that array into new array
console.log(userCart)

