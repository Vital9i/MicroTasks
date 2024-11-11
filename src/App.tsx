import React, { MouseEvent, useState } from 'react';

import './App.css';

type FilterType = 'all'|'dollar'|'ruble'


function App() {

  //   const ButtonFoo1 = (subscriber: string, age: number, adress: string) => {
  //     console.log(subscriber, age, adress)
  //   }
  //   const ButtonFoo2 = (subscriber: string) => {
  //     console.log(subscriber)
  //   }
  //   const ButtonFoo3 = () => {
  //     console.log('Im Stupid Button')
  //   }


  //   return (
  //     <div className='App'>
  //       {/* <button>MyYouTubeChanel-1</button>
  //       <button>MyYouTubeChanel-2</button>  */}
  //       <Button name={'MyYouTubeChanel-1'} callback={() => ButtonFoo1('Im Vasya', 21, 'Minsk')} />
  //       <Button name={'MyYouTubeChanel-2'} callback={() => ButtonFoo2('Im Ivan')} />
  //       <Button name={'StupidButton'} callback={ButtonFoo3} />

  //     </div>
  //   )
  // }

  // let[a, setA]=useState(0)

  // const onClickHandler = ()=>{
  //   setA(++a);
  //   console.log(a)
  // }
  // const onClickHandlerZero = ()=>{
  //   setA(0);
  //   console.log(a)
  // }

  // return(
  //   <div className='App'>
  //   <h1>{a}</h1>
  //   <button onClick={onClickHandler}>number</button>
  //   <button onClick={onClickHandlerZero}>0</button>
  //   </div>
  // )
  // }


  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ])

  const [filter, setFilter] = useState<FilterType>('all')

  let currentMoney = money;

  if (filter === 'ruble') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
  }
  if (filter === 'dollar') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

    return (
      <div className='App'>
        <ul>
          {currentMoney.map((objFromMoneyArr, index) => {
            return (
              <li key={index}>
                <span>{objFromMoneyArr.banknote}</span>
                <span>{objFromMoneyArr.nominal}</span>
                <span>{objFromMoneyArr.number}</span>
              </li>
            )
          })}
        </ul>
        <div style={{ marginLeft: '15px' }}>
          <button onClick={() => onClickFilterHandler('all')}>all</button>
          <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
          <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
        </div>
      </div>
    );
}

  export default App;
