import React from 'react'
import './footer.css'
import fb from '../../../assets/images/fb.svg'
import ig from '../../../assets/images/ig.svg'
import twitter from '../../../assets/images/twitter.svg'
import yt from '../../../assets/images/yt.svg'



const Footer = () => {
    return (
        <>
            <div className="container-fluid  back py-4">

                <div className="row">

                    <div className="col">
                        <p className="">UseFul Links</p>
                        <div className="row">

                            <div className="col">
                                <p>Zostel Homes</p>
                                <p>#Travel Green</p>
                                <p>Guest Policies</p>
                                <p>Privacy Policy</p>
                                <p>Careers</p>
                            </div>

                            <div className="col">
                                <p>Destinations</p>
                                <p>Franchise</p>
                                <p>COntact Us</p>
                                <p>Cookie Policy</p>
                                <p>Passport</p>
                            </div>
                            <div className="col">
                                <p>Community Manager</p>
                                <p>About Us</p>
                                <p>Support</p>
                                <p>T & C</p>
                                <p>COVID-19 FAQs</p>
                            </div>

                        </div>



                    </div>

                    <div className="col">
                        <p>Subscribe</p>
                        <div className="d-flex">
                            <input
                                className="form-control w-25"
                                type="email"
                                placeholder="First Name" />
                            <input type="email" placeholder="Last Name" />
                        </div>
                        <div>
                            <input
                                className="form-control w-50"
                                type="text"
                                placeholder="Please leave your Email" />
                        </div>
                        <div>
                            <button
                                className="btn btn-secondary w-50"
                            >SUBMIT</button>
                        </div>

                    </div>

                    <div className="col">
                        <p>Social</p>
                        <div className="d-flex gap-5">
                            <img src={fb} alt="Facebook" />
                            <img src={ig} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
                            <img src={yt} alt="YouTube" />
                        </div>
                        <div>Zostel © 2020. All Rights Reserved</div>
                    </div>
                </div>


            </div>
        </>
    )
}

export { Footer }
