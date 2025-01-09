import React, { useState } from 'react';
import { NewComponent } from './components/NewComponent/NewComponent';

export type MoneyValue = "All" | "ruble" | "dollar"
export const App = () => {
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

    const [filter, setFilter] = useState<MoneyValue>('All');

    let currentMoney = money

    const onClickFilterHandler = (FilterName: MoneyValue) => {
        setFilter(FilterName)
    }

    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }

    return (
        <>
            <NewComponent onClickFilterHandler={onClickFilterHandler}
                currentMoney={currentMoney} />
        </>
    );

}

