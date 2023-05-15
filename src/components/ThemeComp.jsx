"use client"
import React, { useEffect } from 'react'
import { CiDark } from 'react-icons/ci'
import { useState } from 'react'
import { useTheme } from 'next-themes'



const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === 'system' ? systemTheme : theme;

    console.log(themeMode, "themeMode")

    return (

        <div>
            {/* {
        mounted && (
            themeMode === 'dark' ? (
             )
        } */}
            <CiDark className='cursor-pointer' size={20} />
        </div>
    )
}

export default ThemeComp
