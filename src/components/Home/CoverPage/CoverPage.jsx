import React from 'react'
import ImageGallery from 'react-image-gallery';
import './coverpage.css'
import landingPic1 from '../../../assets/images/Landing_Page_Photo1.svg'
import landingPic2 from '../../../assets/images/landingpage2.svg'
import landingPic3 from '../../../assets/images/landingpage3.svg'
import landingPic4 from '../../../assets/images/landingpage4.svg'
import landingPic5 from '../../../assets/images/landingpage5.svg'




const images = [
    {
        original: landingPic1,
    },
    {
        original: landingPic2,
    },
    {
        original: landingPic3,
    },
    {
        original: landingPic4,
    },
    {
        original: landingPic5,
    },
];



const CoverPage = () => {
    return (
        < div className="img-fluid">
            <ImageGallery
                slideDuration={1000}
                swipingTransitionDuration={1}
                slideInterval={4000}
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={true}
                showNav={false}
                items={images}
                infinite={true} />

            {/* <div className=" text-center live-it-now" > */}
            <h1 className="live-it-now">Live it. Now</h1>
            {/* </div> */}

        </div >
    )
}

export { CoverPage }
