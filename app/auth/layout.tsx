import {FC,ReactNode} from 'react';
import Image from 'next/image';

interface AuthLayoutProps{
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <main className='min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8'>
            <section className='h-full flex flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
                <div className='relative w-96 h-96'>
                    <Image src='/wallpaper.svg' alt='Wallpaper' fill/>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-semibold text-center mb-5'>¡Bienvenido! 
                        <br/> Encuentra tus libros favoritos de la manera mas rapida y sencilla. </h3>
                        <p className='text-white/50 text-xl font-semibold text-center'>Te ayudamos a localizar tus libros favoritos</p>
                        <p className='text-white/50 text-xl font-semibold text-center'>Manejamos un control inteligente de categorias favoritas!</p>
                </div>
            </section>
            <div>
            {children}
            </div>
        </main>
      );
};

export default  AuthLayout;

