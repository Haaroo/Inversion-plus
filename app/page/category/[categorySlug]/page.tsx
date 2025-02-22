"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "./components/filter-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";
import NavbarPage from "@/components/NavbarPage/NavbarPage";
import Footer from "@/components/footer";

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
    const [filterOrigin, setFilterOrigin] = useState("");
    const router = useRouter();
    console.log(result) 
    const filteredProducts =
        result !== null &&
        !loading &&
        (filterOrigin === ""
        ? result
        : result.filter(
            (product: ProductType) => product.origin === filterOrigin
            ));

    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <NavbarPage/>
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        {result !== null && !loading && result.length !== 0 && (
            <h1 className="text-3xl font-medium">
            Tipó: {result[0].category.categoryName}
            </h1>
        )}
        <Separator />
        <p className="p-6 pb-5 py-7 text-2xl font-semibold">
            Temas de interes...
        </p>
        <Separator />
        <div className="sm:flex sm:justify-between">
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {loading && <SkeletonSchema grid={3} />}
            {filteredProducts !== null &&
                !loading &&
                filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
                ))}
            {filteredProducts !== null &&
                !loading &&
                filteredProducts.length === 0 && (
                <p>No hay preguntas de momento en esta seccion...</p>
                )}
            </div>
        </div>
        </div>
        <Footer/>
        </div>
  );
}