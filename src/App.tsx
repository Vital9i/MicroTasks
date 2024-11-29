import React, { HtmlHTMLAttributes, MouseEvent } from 'react';
import './App.css';
import { Button } from './components/Button';


function App() {

  const Button1Foo = (name: string) => {
    console.log(name)
  }

  const Button2Foo = (name: string) => {
    console.log(name)
  }

  return (
    <>
      <Button name ={'Ivan'} callBack={()=>Button1Foo('ivan')} />
      <Button name ={'Vasya'} callBack={()=>Button2Foo('vasya')} />
    </>
  );
}

export default App;

