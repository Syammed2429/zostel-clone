import React from 'react'
import { CoverPage } from '../Home/CoverPage/CoverPage'
import { Destination } from '../Home/Destination/Destination'
import { Footer } from '../Home/Footer/Footer'
import { Navbar } from '../Home/Navbar/Navbar'
import { Search } from '../Home/Search/Search'
import { WhatsNew } from '../Home/What\'s New/WhatsNew'
import { ZostelHomes } from '../Home/Zostel-Homes/ZostelHomes'

const Layout = () => {
    return (
        <>
            <Navbar />
            <br></br>
            <CoverPage />
            <Search />
            <Destination />
            <ZostelHomes />
            {/* <WhatsNew /> */}
            <Footer />
        </>
    )
}

export { Layout }
