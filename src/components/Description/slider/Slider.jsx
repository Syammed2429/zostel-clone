import { Carousel } from "react-responsive-carousel";

export const Slider = () => {
  return (
    <>
      <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true} >
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://images.unsplash.com/photo-1479337260690-c4eb747d6649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
          />
        </div>
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://images.unsplash.com/photo-1618964823387-3d6ff4bb34db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </div>
      </Carousel>
    </>
  );
};
