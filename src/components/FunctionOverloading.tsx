import React from 'react'


const FunctionOverloading = () => {
    function add(a:number,b:number):number;
    function add(a:string,b:string):string;

    function add(a:any,b:any){
        console.log(a+b);
        return a+b;
    }
  return (
    <div>
      <h4> Function Over loading</h4>
      <p> Addition of 2 strings using add function is {add("Hema","Hello")}</p>
      <p> Addition of 2 numbers using add function is {add(10,20)}</p>
    </div>
  )
}

export default FunctionOverloading
