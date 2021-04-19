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
    autoHeight: true,
    // containerClass: "custom-swiper-container swiper-container",
  };

  return (
    <div className="container ml-auto px-0 lg:pb-48 pb-16">
      <Swiper {...params}>
        {gallery.image.map((img) => (
          <div key={img.id}>
            <div className="lg:h-[900px] md:h-[650px] h-[400px] w-full">
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + img.url}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
