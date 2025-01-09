import React from 'react';
import { App,MoneyValue } from '../../App'

type NewComponentProps = {
    onClickFilterHandler:(FilterName: MoneyValue)=>void
    currentMoney:MoneyType[]
}

type MoneyType = {
banknote:string
nominal:number
number:string
}

export const NewComponent = ({onClickFilterHandler, currentMoney}:NewComponentProps) => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
};

