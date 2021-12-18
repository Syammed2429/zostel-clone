import axios from "axios";
import { useState, useEffect } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css"

export const ImagesGallery = () => {

    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
      

    // const [images, setImages] = useState(null);

    // useEffect(() => {
    //     let shouldCancel = false;
    //     const call = async () => {
    //         const response = await axios.get("https://www.npmjs.com/package/react-responsive-carousel");

    //         if (!shouldCancel && response.data && response.data.length > 0) {
    //             setImages(
    //                 response.data.map(url => ({
    //                     original: `${url}=w1024`,
    //                     thumbnail: `${url}=w100`
    //                 }))
    //             );
    //         }
    //     };

    //     call();
    //     return () => (shouldCancel = true);

    // }, []);


    return (
        <>
            <div className="cancel-btn">
                <img src="x-lg.svg" alt="cancel" />
            </div>
            <ImageGallery items={images} />;
        </>
    )

};
