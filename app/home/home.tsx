'use client'

import { useRouter } from "next/navigation";
import React from 'react'

const  HomePage = () => {
    const router = useRouter();
    return (
        <div>
            <p>Home</p>
        </div>
    )
}

export default HomePage;
