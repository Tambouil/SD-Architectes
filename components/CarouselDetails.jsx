// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const CarouselDetails = ({ gallery }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      autoHeight={true}
      loop={true}
      spaceBetween={20}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {gallery.fields.carousel.map((image) => (
        <SwiperSlide key={image.sys.id}>
          <img
            src={"https:" + image.fields.file.url}
            alt="Vignette du projet"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselDetails;
