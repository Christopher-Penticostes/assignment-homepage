import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Photo1 from "../assets/Photo1.webp";
import Photo2 from "../assets/Photo2.webp";
import Photo3 from "../assets/Photo3.webp";
import Photo4 from "../assets/Photo4.webp";
import Photo5 from "../assets/Photo5.webp";
import Photo6 from "../assets/Photo6.webp";
import Photo7 from "../assets/Photo7.webp";

const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7];

const Gallery = () => {
  return (
    <div className="w-full bg-stone-950">
      <div className="max-w-[1550px] flex flex-col items-center pt-9 pb-[60px] mx-auto">
        <p className="text-[40px] font-semibold uppercase text-white mb-[32px] max-lg:text-[32px]">
          Photo Gallery
        </p>

        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
          className="w-full max-w-[1400px] relative overflow-visible"
          breakpoints={{
            0: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="rounded-lg h-[450px] w-full object-cover max-lg:h-[300px] max-md:h-[220px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
