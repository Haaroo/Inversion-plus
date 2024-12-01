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
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
            <SkeletonSchema grid={3} />
        ) : (
            result &&
            result.map((category2: CategoryType) => {
            const { id, categoryName, slug, images } = category2;
            return (
                <Link
                key={id}
                href={`page/category/${slug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 group"
                >
                <div className="w-full h-full relative">
                    <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                    alt={categoryName}
                    className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out transform group-hover:brightness-75"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-2xl font-bold text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    {categoryName}
                    </p>
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