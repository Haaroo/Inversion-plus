'use client'

import {FC, useState} from 'react';
import {cn} from '@/libs/utils';
import { RiEye2Line,RiEyeCloseLine } from "react-icons/ri";


interface InputProps{
    type: 'text' | 'password';
    placeholder: string;
    className?: string;
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({type,placeholder,className,id, name, value, onChange}) => {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className='w-full relative mb-5'>
            <input 
            type={type === 'text' ? 'text' : showPassword ? 'text' : 'password'} 
            className={cn("bg-gray-100 w-full py-3 pl-4 pr-12 outline-none rounded-xl", className)}  
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            />
            {type === 'password' && (
            <button 
            type='button' 
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
            onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <RiEye2Line/> : <RiEyeCloseLine/>}
            </button>
            )}
        </div>
    )
}

export default Input;