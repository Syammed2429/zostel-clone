import React from 'react'
import logo from '../../../assets/images/zostel-logo.svg'
import './navbar.css'


const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="header">
                    <ul className="d-flex justify-content-end  mx-5 gap-5 my-3 list text-uppercase">
                        <div className="d-flex">
                            <li>Hostels</li>
                        </div>
                        <li>Zostal Homes</li>
                        <li>Travel for Tomorrow</li>
                        <li>Longstays</li>
                        <li>Book Now</li>
                        <li>Join us</li>
                        <li>Franchise</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export { Navbar }
