import React, { ChangeEvent, useState } from 'react';

type InputProps = {
    inputValue: (title: string) => void
}

export const FullInput = ({ inputValue }: InputProps) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        inputValue(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

