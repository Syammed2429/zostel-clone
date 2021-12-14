import React from "react";
import Flickity from "react-flickity-component";
import "./Slidebar.css";
import alleppey from '../../../assets/images/Alleppey.svg'
import aurangabad from '../../../assets/images/aurangabad.svg'
import bangalore from '../../../assets/images/Bangalore.svg'
import barot from '../../../assets/images/barot.svg'
import manali from '../../../assets/images/Manali.svg'
import mashobra from '../../../assets/images/Mashobra.svg'
import mcleod from '../../../assets/images/mcledo.svg'
import mumbai from '../../../assets/images/mumbai.svg'


const flickityOptions = {
    groupCells: true,
    imagesLoaded: true,
    pageDots: true,
    contain: true,
    asNavFor: ".carousel-main"
};

function Slidebarr() {
    return (
        <div>
            <div style={{}}>
                {" "}
                <Flickity options={flickityOptions}>
                    <img
                        className="slider"
                        src={alleppey}
                        alt="alleppey"
                    />
                    <img
                        className="slider "
                        src={aurangabad}
                        alt="aurangabad"
                    />
                    <img
                        className="slider "
                        src={bangalore}
                        alt="bangalore"
                    />
                    <img
                        className="slider "
                        src={barot}
                        alt="barot"
                    />
                    <img
                        className="slider "
                        src={manali}
                        alt="manali"
                    />
                    <div>

                        <img
                            className="slider"
                            src={mashobra}
                            alt="mashobra"
                        />
                        <p>Hello</p>
                    </div>


                    <img
                        className="slider "
                        src={mcleod}
                        alt="mcleod"
                    />
                    <img
                        className="slider "
                        src={mumbai}
                        alt="mumbai"
                    />




                </Flickity>

            </div>
        </div>
    );
}

export default Slidebarr;
