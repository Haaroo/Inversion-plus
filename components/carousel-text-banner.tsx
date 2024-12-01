"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title: "El Poder del Interés Compuesto",
        description: "Invertir desde joven te permite aprovechar el poder del interés compuesto, una herramienta clave para hacer crecer tu dinero a lo largo del tiempo.",
        link: "#!"
    },
    {
        id: 2,
        title: "Empezar Pequeño, Pensar en Grande",
        description: "No necesitas ser un experto para empezar a invertir, solo un poco de educación financiera y el hábito de comenzar con pequeñas cantidades.",
        link: "#",
    },
    {
        id: 3,
        title: "Haz que tu Dinero Trabaje para Ti",
        description: "Las inversiones son una forma de hacer que tu dinero trabaje para ti, liberándote de la necesidad de depender solo de tu salario en el futuro.",
        link: "#",
    },
    {
        id: 4,
        title: "La Educación Financiera es Clave",
        description: "Las oportunidades de inversión están en todas partes; lo importante es aprender a identificar aquellas que se alinean con tus objetivos a largo plazo.",
        link: "#",
    },
]


const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-[#98b4b2] dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;