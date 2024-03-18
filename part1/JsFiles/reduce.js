//reduce method
//it not return array
//it return the single value
//it works on array
//in real life it is use to add prices of your items that you added in your cart


//normal example

const arr=[1,2,3,4,5]

// const result=arr.reduce((accumulator,currentValue)=>{
//         return accumulator+currentValue;
// })
// console.log(result);

// accumulator     currentValue        return 
// 1                   2                  3
// 3                   3                  6
// 6                   4                  10
// 10                  5                  15


const result=arr.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
},0);
//console.log(result);

// accumulator     currentValue        return 
// 0                   1                  1
// 1                   2                  3
// 3                   3                  6
// 6                   4                 10
//10                   5                 15


const userCart=[
    {productId:1,  productName:"Laptop", price:40000},
    {productId:2,  productName:"desktop" ,price:20000},
    {productId:3,  productName:"tv", price:10000}
    
]

const totalSum =userCart.reduce((currentSum,currentValue)=>{
        return currentSum + currentValue.price;
},0);

console.log(totalSum);

