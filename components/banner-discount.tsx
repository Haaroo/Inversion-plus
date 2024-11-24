import Link from "next/link";
import { buttonVariants } from "./ui/buttonPage";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-[#99b4b2]">¿No tienes conocimientos sobre como empezar?</h2>
            <h3 className="mt-3 font-semibold">Da tus primeros pasos conocimientos los principáles temas</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="page/info" className={buttonVariants()}>Primeros pasos</Link>
            </div>
        </div>
    );
}

export default BannerDiscount;