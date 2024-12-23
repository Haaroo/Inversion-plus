/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedNotices } from "@/api/getFeturedNotices";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { NoticeType } from "@/types/notices";
import { ResponseType } from "@/types/response";

const FeaturedNotice = () => {
    const { result, loading,error }: ResponseType = useGetFeaturedNotices();
    console.log(result,loading,error)
    if (error) {
        return <p>Error al cargar las categorías: {error}</p>;
    }
    return(
        <div className="max-w-6xl py-4 mx-auto sm-py-16 sm-px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Noticias destacadas del dia</h3>
            <Carousel>
                <CarouselContent>
                {loading ? (
                    <SkeletonSchema grid={3} />  // Asegúrate de tener este componente
                ) : (
            result && result.map((category:NoticeType) => {
                const { id, Title,Description,images } = category;
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lb:basis-1/2 group relative">
                                    <div className="p-1 h-full">
                                        <Card className="py-2 border border-gray-300 shadow-none max-w-90 min-h-full">
                                                <CardContent className="relative w-full items-center justify-center px-6 py-2 h-full">
                                                    <p className="mt-2 px-4 py-1 text-2xl text-black font-bold">
                                                        {Title}
                                                    </p> 
                                                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                                                        <p className="mt-2 text-black px-4 py-1">
                                                            {Description}
                                                        </p> 
                                                        <div className="flex-shrink-0 w-52 h-52 overflow-hidden mt-4 sm:mt-0">
                                                            <img
                                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                                            alt="Image featured"
                                                            className="object-cover w-full h-full rounded-full"
                                                            width={500}
                                                            height={500}
                                                            />        
                                                        </div>
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


export default FeaturedNotice;