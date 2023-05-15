"use client";
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

const Tabs = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");


    const tabs = [
        {
            name: "Popular",
            url: "popular"
        },
        {
            name: "Latest",
            url: "latest"
        },
        {
            name: "Upcoming",
            url: "upcoming"
        }
    ]
    return (
        <div className='p-5 m-5 gap-7 flex justify-center items-center bg-gray-100 dark:bg-gray-900 '>
            {
                tabs.map((tab, i) => (
                    <Link
                        className={`${tab.url === genre ?
                            "underline underline-offset-8 text-amber-600" :
                            "cursor-pointer hover:opacity-80 transition "}`
                        }
                        href={`/?genre=${tab.url}`}
                    >
                        {tab.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Tabs
