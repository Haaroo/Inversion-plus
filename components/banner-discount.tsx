import Link from "next/link";
import { buttonVariants } from "./ui/buttonPage";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un -25% con tu codigo de estudiante</h2>
            <h3 className="mt-3 font-semibold">Usa el codigo: CUCEI, para participar en un concurso.</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Ir a...</Link>
                <Link href="#" className={buttonVariants({ variant: "outline" })}>Más información</Link>
            </div>
        </div>
    );
}

export default BannerDiscount;