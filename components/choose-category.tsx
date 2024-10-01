/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import SkeletonSchema from "./skeletonSchema";

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm-py-16 sm-px-24">
        <h3 className="px-6 text-3xl sm:pb-8">
            Elige tu categoría favorita
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonSchema grid={3}/>
            {!loading &&
            result !== null &&
            result.map((category: CategoryType) => {
                const { id, titulo, descripcion,genero } = category;

                <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                >
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                    {category.titulo}
                </p>
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                    {category.descripcion}
                </p>
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                    {category.genero}
                </p>
                </Link>
            })}
        </div>
        </div>
    );
};

export default ChooseCategory;