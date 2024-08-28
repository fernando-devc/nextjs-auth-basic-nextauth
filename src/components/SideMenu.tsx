import React from 'react'
import { BellIcon, Package2Icon} from 'lucide-react'
import Link from "next/link"
import { Button } from './ui/button'
import { MenuItemList } from '@/constansts/MenuItems'
import SideMenuItem from './SideMenuItem'


export default function SideMenu() {

    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Gerencia Salas</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {MenuItemList.map((item) =>
                            <SideMenuItem {...item} key={item.id}/>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}
