import React from 'react'

const TSFunctions = () => {
const multiply = (x: number, y: number): number => {
  return x * y;
};
const square=(n:number):number =>n*n;
const log = (msg: string): void => {
    console.log( msg);
};

  return (
    <div>
      <h1> Final outputs is {multiply(10,20)}</h1>
      <h1> Squaue of 5 is {square(5)}</h1>
      <h1> Message  is in console {log("Hello")}</h1>
    </div>
  )
}

export default TSFunctions
