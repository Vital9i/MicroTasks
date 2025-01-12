import React, { useState } from 'react';
// import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';


export function App() {
    const [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
        { message: 'message4' },
        { message: 'message5' }
    ]
    )


    let [title, setTitle] = useState('')
    console.log(title)

    const inputValue = (title: string) => {
        setMessage([{ message: title }, ...message])
    }

    const callBackButtonHandler = ()=>{
        inputValue(title)
        setTitle('')
    }

    return (
        <div className="App">
            <Input setTitle ={setTitle} title={title} />
            <Button name={'+'} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}



