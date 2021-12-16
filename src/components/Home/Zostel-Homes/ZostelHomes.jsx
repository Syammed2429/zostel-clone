import React from 'react'
import Slider from "react-slick";
import karapuzha from '../../../assets/images/karapuzha.svg'
import thirunelly from '../../../assets/images/thirunelly.svg'
import pushkar from '../../../assets/images/pushkar.svg'
import kotkhai from '../../../assets/images/kotkhal.svg'
import rashil from '../../../assets/images/rashil.svg'
import cheog from '../../../assets/images/cheog.svg'
import { Button } from '../Button/Button';



const ZostelHomes = () => {

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


    return (
        <>
            <div className="container-fluid col-11 my-5">
                <h2>Zostel Homes</h2>
                <Slider {...settings}>

                    <div className="card" style={{ width: "2rem" }}>
                        <img src={karapuzha} className=" w-100" alt="karapuzha" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />
                        </div>
                    </div>


                    <div className="card" style={{ width: "2rem" }}>
                        <img src={thirunelly} className=" w-100" alt="thirunelly" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>


                    <div className="card" style={{ width: "2rem" }}>
                        <img src={pushkar} className=" w-100" alt="pushkar" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>



                    <div className="card" style={{ width: "2rem" }}>
                        <img src={kotkhai} className=" w-100" alt="kotkhai" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>


                    <div className="card" style={{ width: "2rem" }}>
                        <img src={rashil} className=" w-100" alt="rashil" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>



                    <div className="card" style={{ width: "2rem" }}>
                        <img src={cheog} className=" w-100" alt="cheog" />
                        <div className="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p className="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" />

                        </div>
                    </div>




                </Slider>
            </div>
        </>
    )
}

export { ZostelHomes }
