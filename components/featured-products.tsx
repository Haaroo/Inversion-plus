/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts();
    console.log(result)
    return(
        <div className="max-w-6xl py-4 mx-auto sm-py-16 sm-px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Libros destacados</h3>
            <Carousel>
                <CarouselContent>
                    <SkeletonSchema grid={3}/>
                    {loading && <SkeletonSchema grid={3}/>}
                    {result !== null && 
                        result.map((product: ProductType)=>{
                            const { attributes, id } = product;
                            if (!attributes) {
                                console.error(`Product with ID ${id} has undefined attributes`);
                                return null; // Manejo seguro si attributes es undefined
                            }
                            const { slug, images, productName,genero } = attributes;
                            return (
                                <CarouselItem key={id}className="md:basis-1/2 lb:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-300 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                                                alt="Image featured"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    );
};


export default FeaturedProducts;