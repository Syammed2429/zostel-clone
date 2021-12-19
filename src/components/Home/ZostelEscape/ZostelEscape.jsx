import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Button } from '../Button/Button';
import { escape } from './zostel-escape.json'
import annapurna from '../../../assets/images/annapurna.svg'
import desert from '../../../assets/images/desert-safari.svg'
import everest from '../../../assets/images/everest-base-camp.svg'
import inr from '../../../assets/images/inr-logo.svg'
import star from '../../../assets/images/star.svg'
import clock from '../../../assets/images/clock.svg'
import comments from '../../../assets/images/msg.svg'





const ZostelEscape = () => {
    const [zostelEscape, setZostelEscape] = useState([])

    const settings = {
        // centerMode: true,
        infinite: false,
        // centerPadding: "120px",
        slidesToShow: 3,
        className: "center",
        speed: 500,
        swipeToSlide: true,
        arrows: true,
    };

    useEffect(() => {
        setZostelEscape(escape)

    }, []);


    return (
        <>

            <div className="container-fluid col-11 my-5">
                <h2 className="text-uppercase">Zostel Escape</h2>
                <Slider {...settings}>

                    <div className="card "  >
                        <img src={annapurna} className=" w-100" alt="annapurna" />

                        <div className="card-body" >
                            <p>ADVENTURE | KATHMANDU</p>
                            <h3>ANNAPURNA BASE CAMP TREK</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>14799 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>10 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5 Ratings</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>10 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                    <div className="card ms-1" >
                        <img src={desert} className=" w-100" alt="desert" />
                        <div className="card-body">
                            <p>ADVENTURE | JAISALMER</p>
                            <h3>DESERT SAFARI</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>2500 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>1 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>12 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>


                    </div>


                    <div className="card ms-2" >
                        <img src={everest} className=" w-100" alt="everest" />
                        <div className="card-body">
                            <p>ADVENTURE | KATHMANDU</p>
                            <h3>EVEREST BASE CAMP</h3>
                            <div className="d-flex card-text justify-content-between">
                                <div>
                                    <div className="d-flex">

                                        <img src={inr} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>38499 Onwards</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src={clock} style={{ marginBottom: "15px", marginRight: "5px" }} alt="inr" />
                                        <p>12 Days</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <img src={star} style={{ marginBottom: "15px", marginRight: "5px" }} alt="ratings" />
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src={comments} style={{ marginBottom: "15px", marginRight: "5px" }} alt="reviews" />
                                        <p>10 Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>

                    {/* <div className="card " style={{ width: "2rem" }}>
                        <div className="row">

                            {zostelEscape.map((e) => (
                                <div className="col">
                                    <img src={everest} className=" w-100" alt="everest" />
                                    <div className="card-body">
                                        <h3>{e.name}</h3>
                                    </div>

                                    <Button text="Explore" size="col-12" />
                                </div>
                            ))}
                        </div>
                        </div> */}
                    {/* <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p> */}
                    {/* </div> */}



                </Slider>
            </div >



        </>
    )
}

export { ZostelEscape }
