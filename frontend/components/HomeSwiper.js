import React from "react";
import Swiper from "react-id-swiper";
import Image from "next/image";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";

const HomeSwiper = ({ gallery }) => {
  SwiperCore.use([Navigation, Autoplay]);
  const params = {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // containerClass: "custom-swiper-container swiper-container",
  };

  return (
    <div className="container ml-auto px-0 pb-48">
      {/* {gallery.image.map((img) => {
        <div key={img.id}>
          <p>{img.name}</p>
          <Image src={img.url} alt="" height={720} width={800} />
        </div>;
      })} */}
      <Swiper {...params}>
        <div>
          <Image src="/img1-min.jpg" alt="" layout="fill" />
        </div>
        <div>
          <Image src="/img2-min.jpg" alt="" layout="fill" />
        </div>
        <div>
          <Image src="/img3-min.jpg" alt="" layout="fill" />
        </div>
        <div>
          <Image src="/img4-min.jpg" alt="" layout="fill" />
        </div>
        <div>
          <Image src="/img5-min.jpg" alt="" layout="fill" />
        </div>
        <div>
          <Image src="/img6-min.jpg" alt="" layout="fill" />
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
