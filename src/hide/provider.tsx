"use client"
import Header from '@/components/Header'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import Sidebar from '@/components/Sidebar'
// import Header from '@/app/componets/header/header';
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

function Provider({ children }: React.PropsWithChildren<Props>) {
    const pathname = usePathname()
    const comanroute = ['/auth/signin'];
    const isPublicRoute = comanroute.includes(pathname)

    return (
        <>
            {isPublicRoute ? (

                <>
                    {children}
                </>
            ) : (

                <>
                    <DefaultLayout>
                        {children}
                    </DefaultLayout>

                </>
            )}
        </>
    )
}

export default Provider
