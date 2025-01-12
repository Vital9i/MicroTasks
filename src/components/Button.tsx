import React from 'react';

type ButtonProps = {
    name: string
    callback: () => void
}

export const Button = ({name, callback }: ButtonProps) => {

    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

