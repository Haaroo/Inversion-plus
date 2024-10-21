import Image from "next/image";

const Logo = () => {
    return (
        <div className='relative w-96 h-24'>
            <Image src='/logo.png' alt='Logo' width={500} height={100}/>
        </div>

    )
}

export default Logo;