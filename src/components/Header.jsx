import React from 'react'
import { BiSearch } from 'react-icons/bi'
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'

const Header = () => {
    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/signin"
        }
    ]
    return (
        <div className='flex items-center gap-5 h-20 p-5'>
            <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
            <div className='flex flex-1 p-3 items-center gap-2 border rounded-lg'>
                <input className='outline-none bg-transparent flex-1' placeholder='Search' type="text" />
                <BiSearch size={20} />
            </div>
                <ThemeComp />
            {
                menu.map((mn, i) => (
                    <MenuItem mn={mn} key={i} />

                ))
            }
        </div>
    )
}

export default Header
