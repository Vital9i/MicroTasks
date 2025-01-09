import React, {ChangeEvent, useState} from 'react';

const FullInput = () => {
    let[title,setTitle] = useState('')
    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{

    }
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{}}>+</button>
        </div>
    );
};

export default FullInput;