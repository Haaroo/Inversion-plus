import { chown } from 'fs'
import React from 'react'

export default function layoutDashboard({children}: {children: React.ReactElement}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden xl:block w-80 h-full xl:fixed'>
            Siderbar
        </div>
        <div className='w-full xl:ml-80'>
            <p>Navbar</p>
            <div className='p-6 bg-secondary'>
            {children}
            </div>
        </div>
    </div>
  )
}
