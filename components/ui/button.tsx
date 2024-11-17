import {FC} from 'react';
import React from 'react';

interface ButtonProps{
    type: 'button' | 'submit';
    label: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({type,label,onClick}) => {
    return(
        <button type={type}
        className='w-full bg-[#99b4b2] text-white py-3 px-4 rounded-xl border-2 border-transparent hover:bg-transparent hover:bg-[#061429] hover:text-primary transition-colors duration-35'
        onClick={onClick}
        >{label}</button>
        
    )
}

export default Button;