"use client"

import { useGetProductBySlug } from '@/api/getProductBySlug'
import Footer from '@/components/footer'
import NavbarPage from '@/components/NavbarPage/NavbarPage'
import { useParams } from 'next/navigation'
import React from 'react'
import InfoProduct from "./components/info-product";
import SkeletonSchema from '@/components/skeletonSchema'
import { ResponseType } from "@/types/response";

export default function page() {
    const params = useParams()
    const {productSlug} = params;
    const { result }: ResponseType = useGetProductBySlug(productSlug)
    if (result === null) {
        return <SkeletonSchema grid={3} />
    }
    return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <NavbarPage/>
                <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
                    <div className="grid sm:grid-cols-1">
                        <div className="sm:px-12">
                            <InfoProduct product={result[0]} />
                        </div>
                    </div>
                </div>
            <Footer/>
    </div>
    )
}
