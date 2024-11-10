import React, { MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';



function App() {

  const ButtonFoo1 = (subscriber: string, age: number, adress: string) => {
    console.log(subscriber, age, adress)
  }
  const ButtonFoo2 = (subscriber: string) => {
    console.log(subscriber)
  }
  const ButtonFoo3 = () => {
    console.log('Im Stupid Button')
  }


  return (
    <div className='App'>
      {/* <button>MyYouTubeChanel-1</button>
      <button>MyYouTubeChanel-2</button>  */}
      <Button name={'MyYouTubeChanel-1'} callback={() => ButtonFoo1('Im Vasya', 21, 'Minsk')} />
      <Button name={'MyYouTubeChanel-2'} callback={() => ButtonFoo2('Im Ivan')} />
      <Button name={'StupidButton'} callback={ButtonFoo3} />

    </div>
  )
}

export default App;
