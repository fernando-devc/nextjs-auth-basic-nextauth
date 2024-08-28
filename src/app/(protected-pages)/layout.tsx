'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function Authlayout({
    children,
}: {
    children: React.ReactNode
}) {

    const { status } = useSession()
    const { replace } = useRouter()

    if (status === 'loading') {
        return (
            <></>
        )

    } else if (status !== 'authenticated') {
        return replace('/')
    } else {
        return (
            <div className='h-screen'>
                {children}
            </div>
        )
    }
}