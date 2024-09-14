import {FC} from 'react';

interface ButtonProps{
    type: 'button' | 'submit';
    label: string;
}

const Button: FC<ButtonProps> = ({type,label}) => {
    return(
        <button type={type}
        className='w-full bg-primary text-white py-3 px-4 rounded-xl border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-35'
        >{label}</button>
    )
}

export default Button;