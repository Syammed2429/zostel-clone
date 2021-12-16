import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import annapurna from '../../../assets/images/annapurna.svg'
import desert from '../../../assets/images/desert-safari.svg'
import everest from '../../../assets/images/everest-base-camp.svg'
import { escape } from './zostel-escape.json'

import { Button } from '../Button/Button';




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
                <h2>Zostel Escape</h2>
                <Slider {...settings}>

                    <div className="card" style={{ width: "2rem" }}>
                        <img src={annapurna} className=" w-100" alt="annapurna" />
                        <div className="card-body">
                            <h3>annapurna, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                    <div className="card" style={{ width: "2rem" }}>
                        <img src={desert} className=" w-100" alt="desert" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>


                    <div className="card" style={{ width: "2rem" }}>
                        <img src={everest} className=" w-100" alt="everest" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
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
