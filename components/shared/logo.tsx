import Image from "next/image";

const Logo = () => {
    return (
        <div className='relative w-96 h-24'>
            <Image src='/logop.png' alt='Logo' width={500} height={100}/>
        </div>

    )
}

export default Logo;