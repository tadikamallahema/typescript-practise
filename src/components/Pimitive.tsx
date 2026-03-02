//import React from 'react'

const Pimitive = () => {
    let name:string="Hema";
    let age:number=20;
    let isAdmin:boolean=true;
    let price:any="FiftyFive "; // If we use any , it can take anytype of input also
    price=65; // Here as we mentioned any datatype for price we can update this 
    let discount:number| undefined=40;


    //functions --here we are saying add is of number type
    function add(a:number,b:number):number{
         return a+b;
    }
    let nums:number[]=[7,5,6,4,9,2];
   /*  let users: Array<string> = ["A", "B"]; */

    let userObject:{ name:string;price:number}[]=[
        {name:"Hema",price:80},
        {name:"Mani",price:30},
        {name:"Hm",price:90}];
        /* enum dit{North="nor",East="eas",South="so",West="wes"};
        let curr=dit.East;
        console.log(curr);   */ 
    
    let tuple:[string,number]=["Hema",123];
    // if we write then in reverse then we will get an error for sure 
    /* let response: [number, string] = [200, "Success"];// mailny used for API's
     */
    let input: unknown = "hello";
    if (typeof input === "string") {
    console.log(input.toUpperCase());
    }


  return (
    <div>
      <h1> Hello i am using TypeScript</h1>
      {/*Only if isAdmin true heading tag data will be printed  */}
      {isAdmin  && <h1>  My name is {name} of age {age} and i am not a admin {isAdmin}</h1>}
      <h1>Price of a product is {price} and discount is {discount}</h1>
      <button onClick={()=>{console.log(add(5,6))}}>Submit</button>
      {/*Iteration of array  */}
      {nums.map((num,index)=>(
        <p key={index} >{num}</p>
      ))}

      {/* {users.map((user,index)=>{
        <p key={index} >{user}</p>
      })} */}
    {/*Iteration os userobject  */}
      {userObject.map((u,index)=>(
          <div key={index}>
            <p>{u.name}</p>
            <p>{u.price}</p>
         </div>
      ))}

      {/*Iteration of Tuples  */}
      {tuple.map((item, index) => (
    <p key={index}>{item}</p>
        ))}
        <h1> </h1>
    </div>
  )
}

export default Pimitive
