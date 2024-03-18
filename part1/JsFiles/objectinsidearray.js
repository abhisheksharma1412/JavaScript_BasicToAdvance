const products=[
   {product1:1, productName:"Desktop", price:20000},
   {product1:2, productName:"Laptop", price:40000},
    {product1:3, productName:"TV", price:10000}

]

console.log(products);

for(let product of products){
    console.log(product.productName);
}