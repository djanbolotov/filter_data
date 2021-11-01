import React from 'react'

type Props = any;
export const Input: React.FC<Props> = ({setWord}) => {
    return (
        <input className="input_area" placeholder="Введите любое значение..." 
        onChange={(e) => setWord(e.target.value)}/>
    )
}