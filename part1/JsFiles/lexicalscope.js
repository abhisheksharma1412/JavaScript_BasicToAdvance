function superMain(){

    const myMain=()=>{
        
        function myChild(){
            console.log("Hey, i'm child");
        }
        console.log("Hardik sharma");
         myChild(); //i'am not able to call that function from outside this scope i.e myMain()
    }
    myMain(); //i'am not able to call that function from outside this scope i.e superMain()
    }
    //superMain();



    //for inner function child() => inside child() i declared the variable myvar and print this variable
    //and i create the same variable outside the scope .
    //firstly it check the block in which it is defined 
    //according to this it firstly check child(), 
    //if variable is present inside the child() then it will print the value of myvar which is inside child()
    //if value is not present inside the child(),
    //then it check in the next closest scope.
    //according to this example next clsest scope is myApp()
    //so it check inside it is variable is present then it will print the value
    function myApp(){
        let myvar=20;
        const child=()=>{
            //let myvar=12;
            console.log(myvar);
        }

        child();
    }
myApp();
