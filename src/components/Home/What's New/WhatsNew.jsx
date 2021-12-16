import React from 'react'
import Slider from "react-slick";
import sissu from '../../../assets/images/sissu.svg'
import sissu2 from '../../../assets/images/sissu2.svg'
import music from '../../../assets/images/musicathon.svg'



const settings = {
    // centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
};


const WhatsNew = () => {
    return (
        <>
            <div className="container-fluid w-100">
                <h2>What's New</h2>
                <Slider {...settings}>
                    <div className="w-100  ">





                        <div class="card mb-3 "  >
                            <div class="row g-0 ">
                                <div class="col-md-6">
                                    <img src={sissu} class="img-fluid rounded-start" style={{ height: "px" }} alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-">
                                    <img src={music} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={sissu2} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>










                    </div>


                </Slider>




            </div>

        </>
    )
}

export { WhatsNew }
