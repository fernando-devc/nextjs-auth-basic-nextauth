import React from 'react'
import SideMenu from '@/components/SideMenu'
import AppBar from '@/components/AppBar'


export default function layout({ children }: any) {
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] relative">
            <SideMenu />
            <div className="flex flex-col">
                <AppBar />
                <div className='flex-1 overflow-y-auto max-h-[calc(100vh-80px)]'>
                    {children}
                </div>
            </div>
        </div>
    )
}
