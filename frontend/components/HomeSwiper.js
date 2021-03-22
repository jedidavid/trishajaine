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
      <Swiper {...params}>
        {gallery.image.map((img) => (
          <div key={img.id}>
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + img.url}
              alt=""
              layout="fill"
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
