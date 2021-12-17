import React from 'react'
import logo from '../../../assets/images/zostel-logo.svg'
import './navbar.css'

const styles = {
    show: {
        display: 'flex',
        gap: "10px",



    },
    hidden: {
        display: 'none'
    }
}



const Navbar = () => {
    const [hostels, setHostels] = React.useState(styles.hidden)
    const [zostelHomes, setZostelHomes] = React.useState(styles.hidden)



    return (
        <>
            <div>
                <div>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="header">
                    <ul className="d-flex justify-content-end  mx-5 gap-5 my-3 list text-uppercase">
                        <div className="d-flex">
                            <li onClick={() => {
                                setHostels(hostels === styles.hidden ? styles.show : styles.hidden)
                            }}>Hostels</li>
                            <div

                                style={{ ...hostels }}
                                className="col bg-black text-white  px-4 mx-5 dropDown ">
                                <div className="">
                                    <li>Alleppey</li>
                                    <li>Aurangabad</li>
                                    <li>Bangalore</li>
                                    <li>Barot (Rajgundha)</li>
                                    <li>BIR 2.0</li>
                                    <li>Chennai</li>
                                    <li>Chitkul</li>
                                    <li>Coorg</li>
                                    <li>Dalhousie</li>
                                    <li>Delhi</li>
                                    <li>Gangtok</li>
                                    <li>Gokarna</li>
                                    <li>Jaipur</li>
                                </div>
                                <div className="">
                                    <li>Jaisalmer</li>
                                    <li>Jodhpur</li>
                                    <li>Kathmandu</li>
                                    <li>Kochi</li>
                                    <li>Kodaikanal</li>
                                    <li>Kolad</li>
                                    <li>Leh</li>
                                    <li>Manali</li>
                                    <li>Mcleodganj</li>
                                    <li>Mukteshwar</li>
                                    <li>Mumbai</li>
                                    <li>Munnar</li>
                                    <li>Mussorie</li>
                                </div>

                                <div className="">
                                    <li>Mysore</li>
                                    <li>Ooty</li>
                                    <li>Panchgani</li>
                                    <li>Pokhra</li>
                                    <li>Pushkar</li>
                                    <li>Rishikesh 2.0</li>
                                    <li>Shangarh</li>
                                    <li>Sissu</li>
                                    <li>Spiti</li>
                                    <li>Udaipur</li>
                                    <li>Vagamon</li>
                                    <li>Varkala</li>
                                    <li>Wayanad</li>
                                </div>

                            </div>
                        </div>
                        <li
                            onClick={() => {
                                setZostelHomes(zostelHomes === styles.hidden ? styles.show : styles.hidden);
                            }}
                        >Zostal Homes</li>
                        <div

                            style={{ ...zostelHomes }}
                            className="col bg-black text-white  px-4 mx-5 dropDown ">
                            <li>What are Zostek Homes</li>
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




/* 



                        

*/