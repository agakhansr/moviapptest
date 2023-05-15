import React from 'react'
import './globals.css'
import Header from '../components/header'
import Providers from './Providers'


const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default Layout
