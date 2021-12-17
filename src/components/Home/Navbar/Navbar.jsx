import React from 'react'
import logo from '../../../assets/images/zostel-logo.svg'
import './navbar.css'

const styles = {
    show: {
        display: 'flex',


    },
    hidden: {
        display: 'none'
    }
}



const Navbar = () => {
    const [display, setDisplay] = React.useState(styles.hidden)



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
                        <li
                            onClick={() => {
                                setDisplay(display === styles.hidden ? styles.show : styles.hidden)
                            }}
                        >Zostal Homes</li>
                        <div
                            className="card shadow row dropDown"
                            style={{ ...display }}>
                            <div className="col d-flex gap-2">
                                <div className="row">
                                    <li>adf</li>
                                    <li>adf</li>
                                    <li>adf</li>
                                    <li>adf</li>
                                    <li>adf</li>


                                </div>

                            </div>
                            <div className="row d-flex gap-2">

                                <li>adf</li>
                                <li>adf</li>
                                <li>adf</li>
                                <li>adf</li>
                                <li>adf</li>



                            </div>

                        </div>

                        <li>Travel for Tomorrow</li>
                        <li>Longstays</li>
                        <li>Book Now</li>
                        <li>Join us</li>
                        <li>Franchise</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export { Navbar }
