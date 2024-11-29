import React, { HtmlHTMLAttributes, MouseEvent, useState } from 'react';
import './App.css';
import { Button } from './components/Button';


function App() {

// let a =1;
let[a,setA]=useState(1);

const onClickHandler = ()=>{
  setA(++a);
  console.log(a)
}

const onClickHandlerFromZero = ()=>{
  setA(a=0);
  console.log(a)
}

  return (
    <>
    <h1>{a}</h1>
    <button onClick={onClickHandler}>number</button>
    <button onClick={onClickHandlerFromZero}>0</button>
    </>
  );
}

export default App;

