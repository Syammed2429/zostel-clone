import React from 'react'
import { CoverPage } from '../Home/CoverPage/CoverPage'
import { Test } from '../Home/CoverPage/Test'
import { Destination } from '../Home/Destination/Destination'
import { Footer } from '../Home/Footer/Footer'
import { Navbar } from '../Home/Navbar/Navbar'
import { Search } from '../Home/Search/Search'

const Layout = () => {
    return (
        <>
            <Navbar />
            <br></br>
            <CoverPage />
            {/* <Test /> */}
            <Search />
            <Destination />
            <Footer />
        </>
    )
}

export { Layout }
