import React from 'react'

const TSInterfaces = () => {
    interface User{
        name?:string;
        email:string;
        phoneNumber:number;
        password:string ;
    }
    let k:number=10;
    const u:User={email:"hema@gmail.com",phoneNumber:7412589630,password:"Hema@123"};
    console.log(u);
    
  return (
    <div>
        <h1>Understanding Interfaces topic in TypeScript </h1>
        <h3>the number is {k}</h3>
    </div>
  )
}

export default TSInterfaces
