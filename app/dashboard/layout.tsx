import NavbarDash from '@/components/NavbarDash/NavbarDash'
import { chown } from 'fs'
import React from 'react'
import { Sidebar } from "@/components/Sidebar";

export default function layoutDashboard({children}: {children: React.ReactElement}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden xl:block w-80 h-full xl:fixed'>
            <Sidebar/>
        </div>
        <div className='w-full xl:ml-80'>
            <NavbarDash/>
            <div className='p-6 bg-secondary'>
            {children}
            </div>
        </div>
    </div>
  )
}
