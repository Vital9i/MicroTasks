import React,{ChangeEvent} from 'react';

type inputProps = {
    setTitle:(title:string)=>void
    title:string
}

export const Input = ({setTitle,title}:inputProps) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    return (
        
        <input value={title} onChange={onChangeInputHandler} />
    );
};

