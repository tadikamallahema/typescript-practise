import React from 'react'

interface User{
    id:number;
    name:string;
    email:string;
    password:String;
}
const PickOmitRequired = () => {
    type PublicUser=Pick<User,'id'|'name'>

    type UserWithoutPassword=Omit<User,'password'>
    interface PartialUser{
        id?:number;
        name?:string;
        email?:string;
    }
    type RequiredUser=Required<PartialUser>;
    const publicUserInfo: PublicUser = {
    id: 1,
    name: 'Alice',
    //email:'hello@gmail.com';  --> This gives an error as we are not mentioned email in the  pick
  };

  const userWithoutPassword: UserWithoutPassword = {
    id: 1,
    name: 'Alice', // If i miss any of here that will also gives me an error
    email: 'alice@gmail.com',
  };

  const requiredUser: RequiredUser = {
    id: 1,
    name: 'Bob',
    email: 'bob@gmail.com',// here we mentioned required for 3 fields so if we dont give 4 th param also we dont get any error 
  };

  return (
    <div>
      <h3> Usage of Pick , Omit and Required with an example</h3>
      <p>Public User: {publicUserInfo.name}</p>
      <p>User Without Password: {userWithoutPassword.email}</p>
      <p>Required User: {requiredUser.name}</p>
    </div>
  )
}

export default PickOmitRequired
