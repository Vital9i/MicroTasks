import React, { HtmlHTMLAttributes, MouseEvent, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ]
  )
  return (
      <div className="App">
        <div>
          <input />
          <button>+</button>
        </div>
        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}
export default App;






// type FilterType = 'all' | 'dollar' | 'ruble'
//
// function App() {
//
//   const [money, setMoney] = useState([
//     { banknote: "dollar", nominal: 100, number: "a123456789" },
//     { banknote: "dollar", nominal: 50, number: "b123456789" },
//     { banknote: "ruble", nominal: 100, number: "c123456789" },
//     { banknote: "dollar", nominal: 100, number: "d123456789" },
//     { banknote: "dollar", nominal: 50, number: "e123456789" },
//     { banknote: "ruble", nominal: 100, number: "f123456789" },
//     { banknote: "dollar", nominal: 50, number: "j123456789" },
//     { banknote: "ruble", nominal: 50, number: "h123456789" }
//   ])
//
//   const [filter, setFilter] = useState<FilterType>('all')
//
//   let currentMoney = money;
//
//   if (filter === 'ruble') {
//     currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
//   }
//   if (filter === 'dollar') {
//     currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
//   }
//
//   const onClickFilterHandler = (namebutton:FilterType) => {
//     console.log(namebutton)
//     setFilter(namebutton)
//   }
//
//   return (
//     <>
//       <ul>
//         {currentMoney.map((objFromMoneyArr, index) => {
//           return (
//             <li key={index}>
//               <span>{objFromMoneyArr.banknote}</span>
//               <span>{objFromMoneyArr.nominal}</span>
//               <span>{objFromMoneyArr.number}</span>
//             </li>
//           )
//         })}
//       </ul>
//       <div style={{ marginLeft: '35px' }}>
//         <button onClick={() => onClickFilterHandler('all')}>All</button>
//         <button onClick={() => onClickFilterHandler('ruble')}>Rubles</button>
//         <button onClick={() => onClickFilterHandler('dollar')}>Dollars</button>
//       </div>
//     </>
//   );
// }
//
// export default App;
//
