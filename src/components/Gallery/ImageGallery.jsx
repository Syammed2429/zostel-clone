import axios from "axios";
import { useState, useEffect } from "react"
// import { render } from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css"

export const ImagesGallery = () => {

    const [images, setImages] = useState(null);

    useEffect(() => {
        let shouldCancel = false;
        const call = async () => {
            const response = await axios.get("https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948");

            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(
                    response.data.map(url => ({
                        original: `${url}=w1024`,
                        thumbnail: `${url}=w100`
                    }))
                );
            }
        };

        call();
        return () => (shouldCancel = true);

    }, []);


    return (
        <>
            <div className="cancel-btn">
                <img src="x-lg.svg" alt="cancel" />
            </div>
            {images ? <ImageGallery items={images} /> : null};
        </>
    )

};
