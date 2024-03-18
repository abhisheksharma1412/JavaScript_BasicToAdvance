function hello(){
        // console.log("Hello world");
           return   "Hello world";
        }


const func1=()=>{
//   return   "Hello world";
// return  1234;
// return [1,2,3,4]
// return {firstname:"Hardik",age:23};
    // function hello(){
    //     // console.log("Hello world");
    //        return   "Hello world";
    //     }


    //  return hello;
    return function(){
        return "Hello world";
    }

}

const a=func1();
console.log(a());