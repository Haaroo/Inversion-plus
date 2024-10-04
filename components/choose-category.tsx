/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import SkeletonSchema from "./skeletonSchema";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import Link from "next/link";

const ChooseCategory = () => {
    const { result, loading,error }: ResponseType = useGetCategories();
    console.log(result,loading,error)
    if (error) {
        return <p>Error al cargar las categorías: {error}</p>;
    }
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 pb-4 text-3xl sm:pb-8">
            Elige tu categoría favorita
        </h3>
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {loading ? (
                    <SkeletonSchema grid={3} />  // Asegúrate de tener este componente
                ) : (
            result && result.map((category2 : CategoryType) => {
                const { id, categoryName,slug, images } = category2;
                return (
                    <Link
                    key={id}
                    href={`/category/${slug}`}
                    className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    >
                        <div className="p-1 h-full">
                            <div className="w-full items-center overflow-hidden">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                    alt={categoryName}
                                    className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                />
                                <p className="pt-12 absolute w-full text-lg font-bold text-center text-black bottom-1">
                                    {categoryName}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })
        )}
        </div>
    </div>
);
};

export default ChooseCategory;