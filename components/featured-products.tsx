/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";

const FeaturedProducts = () => {
    const { result, loading,error }: ResponseType = useGetFeaturedProducts();
    console.log(result,loading,error)
    if (error) {
        return <p>Error al cargar las categorías: {error}</p>;
    }
    return(
        <div className="max-w-6xl py-4 mx-auto sm-py-16 sm-px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Libros destacados</h3>
            <Carousel>
                <CarouselContent>
                {loading ? (
                    <SkeletonSchema grid={3} />  // Asegúrate de tener este componente
                ) : (
            result && result.map((category:ProductType) => {
                const { id, productName,images,genero } = category;
                            return (
                                <CarouselItem key={id} className="md:basis-1/4 lb:basis-1/4 group relative">
                                    <div className="p-1 h-full">
                                        <Card className="py-4 border border-gray-300 shadow-none max-w-90 min-h-full">
                                                <CardContent className="relative w-full items-center justify-center px-6 py-2 h-full">
                                                    <div className="w-full items-center overflow-hidden">
                                                        <img
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                                        alt="Image featured"
                                                        className="w-full h-full object-cover text-center items-center"
                                                        />
                                                        <p className="mt-2 px-4 py-1 text-white bg-black rounded-full text-center">
                                                                {genero}
                                                        </p>         
                                                    </div>                                       
                                                </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    );
};


export default FeaturedProducts;