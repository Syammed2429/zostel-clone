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
        centerPadding: "120px",
        slidesToShow: 3,
        className: "center",
        speed: 500,
        swipeToSlide: true,

        // slidesPerRow: 2

    };


    return (
        <>
            <div className="container-fluid col-11 my-5">
                <h2>Zostel Homes</h2>
                <Slider {...settings}>

                    <div class="card" style="width: 12rem;">
                        <img src={karapuzha} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />
                        </div>
                    </div>


                    <div class="card" style="width: 12rem;">
                        <img src={thirunelly} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />

                        </div>
                    </div>


                    <div class="card" style="width: 12rem;">
                        <img src={pushkar} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />

                        </div>
                    </div>



                    <div class="card" style="width: 12rem;">
                        <img src={kotkhai} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />

                        </div>
                    </div>


                    <div class="card" style="width: 12rem;">
                        <img src={rashil} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />

                        </div>
                    </div>



                    <div class="card" style="width: 12rem;">
                        <img src={cheog} className=" w-100" alt="..." />
                        <div class="card-body">
                            <h3>KARAPUZHA, WAYANAD</h3>
                            <p class="card-text">A close-knit holiday immersed in nature awaits you at this petite Zostel Home, located in the lush green milieus of Wayanad’s Karapuzha lake. Blending flavours of both traditional and modern architecture, this homestay offers a laidback experience for travellers and digital nomads. Here, vast balconies invite in serenity, a blooming garden helps......</p>
                            <Button text="Explore" size="col-12" color="" />

                        </div>
                    </div>




                </Slider>
            </div>
        </>
    )
}

export { ZostelHomes }
