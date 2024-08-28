'use client'

import InforProvider from '@/providers/contextProvider'
import NextAuthSessionProvider from '@/providers/sessionProvider'


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextAuthSessionProvider>
            <InforProvider>
                {children}
            </InforProvider>
        </NextAuthSessionProvider>
    )
}