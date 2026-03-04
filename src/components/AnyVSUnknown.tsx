import React from 'react'

const AnyVSUnknown = () => {
    let a:any=10;
    a="hello";
    a=a.toUpperCase();

    let b:unknown="Hey";
   // b=b.toUpperCase(); --> It gives me output but still there is an error

   if(typeof b==='string'){
    b=b.toUpperCase();
   }
  return (
    <div>
      <h3> any vs unknown </h3>
        <p> Upper case of a(any) is {a}</p>
        <p> Upper case of b(unknown) is {a}</p>
    </div>
  )
}

export default AnyVSUnknown
