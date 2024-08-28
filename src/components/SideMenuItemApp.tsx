'use client'
import Link from 'next/link'
import React from 'react'
import Icons from './Icons'
import { usePathname } from 'next/navigation'

type ItemProps = {
    id: number,
    description: string,
    title: string,
    icon: string,
    href: string,
}
export default function SideMenuItem({
    id,
    description,
    title,
    icon,
    href
}: ItemProps) {
    const path = usePathname()

    return (
        <Link
            href={href}
            className={
                (
                    href === path ?
                    ' bg-primary text-white'
                    :
                    ' hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-gray-500 '
                )
                +
                " flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all "
            }
            prefetch={false}
        >
            <Icons icon={icon} />
            {title}
        </Link>
    )
}
