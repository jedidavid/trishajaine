import Swiper from "react-id-swiper";
import Image from "next/image";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import { getStrapiMedia } from "../lib/media";

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
  };

  return (
    <div className="container ml-auto px-0 lg:pb-48 pb-16">
      <Swiper {...params}>
        {gallery.image.map((img) => (
          <div key={img.id}>
            <div className="w-full">
              <Image
                src={getStrapiMedia(img)}
                alt={img.alternativeText || img.name}
                width={1000}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
