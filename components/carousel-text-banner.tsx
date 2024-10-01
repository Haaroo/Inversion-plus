"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title: "Descubre tu próxima lectura",
        description: "Sumérgete en una vasta colección de libros digitales. Desde novelas clásicas hasta bestsellers contemporáneos, ¡hay algo para todos!",
        link: "#!"
    },
    {
        id: 2,
        title: "Ofertas exclusivas solo para ti",
        description: "Aprovecha descuentos y promociones especiales en una selección de títulos. ¡Haz que tu biblioteca digital crezca sin gastar de más!",
        link: "#",
    },
    {
        id: 3,
        title: "Nuevas publicaciones cada semana",
        description: "Mantente al día con las últimas novedades literarias. Explora nuestras selecciones semanales y encuentra tu próximo libro favorito.",
        link: "#",
    },
    {
        id: 4,
        title: "Comparte tu pasión por los libros",
        description: "Únete a nuestra comunidad de lectores. Comparte reseñas, recomendaciones y conecta con otros amantes de la literatura.",
        link: "#",
    },
]


const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
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