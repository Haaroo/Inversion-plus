import {FC,ReactNode} from 'react';
import Image from 'next/image';


interface AuthLayoutProps{
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <main className='min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8'>
            <section className='hidden lg:flex h-full flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
                <div className='relative w-96 h-96'>
                    <Image src='/wallpaper.svg' alt='Wallpaper' fill/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-semibold text-center mb-5'>¡Bienvenido a CloudBooks!
                        <br/> Tu aliado inteligente para una gestión eficiente y organizada.
                    </h3>
                        <p className='text-white/70 text-xl font-semibold text-center'>Inicia sesión para optimizar tus operaciones y llevar tu librería al siguiente nivel.</p>
                        <p className='text-white/70 text-xl font-semibold text-center'>Estamos aquí para ayudarte a transformar cada desafío en una oportunidad.</p>
                </div>
            </section>
            <div>
                {children}
            </div>       
        </main>
    );
};

export default  AuthLayout;

