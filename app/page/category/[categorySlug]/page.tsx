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
    const filteredProducts =
        result !== null &&
        !loading &&
        (filterOrigin === ""
        ? result
        : result.filter(
            (product: ProductType) => product.category === filterOrigin
            ));
            console.log(result)
    return (
        <div>
            <NavbarPage />
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        {result !== null && !loading && result.length !== 0 && (
            <h1 className="text-3xl font-medium">
            Café 
            </h1>
        )}
        <Separator />

        <div className="sm:flex sm:justify-between">
            <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {loading && (<SkeletonSchema grid={3} />)}
            {result !== null && !loading && (
                result.map((product: ProductType) =>(
                    <ProductCard key={product.slug} product={product}/>
                ))
            )}
            </div>
        </div>
        </div>
        <Footer />
        </div>
    
    );
}