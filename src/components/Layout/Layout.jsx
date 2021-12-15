import React from 'react'
import { CoverPage } from '../Home/CoverPage/CoverPage'
import { Destination } from '../Home/Destination/Destination'
import { Footer } from '../Home/Footer/Footer'
import { Navbar } from '../Home/Navbar/Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <br></br>
            <CoverPage />
            <Destination />
            <Footer />
        </>
    )
}

export { Layout }
