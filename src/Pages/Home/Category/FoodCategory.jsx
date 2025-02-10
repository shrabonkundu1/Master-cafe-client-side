import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const FoodCategory = () => {
  return (
   <section>
    <SectionTitle
    subHeading={"From 11.00am to 10.00pm"}
    heading={"Order Online"}
    >
        
    </SectionTitle>
     <Swiper
    slidesPerView={4}
    spaceBetween={0}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
        <p className="text-4xl uppercase pl-16 text-white -mt-28">Salads</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
        <p className="text-4xl uppercase pl-16 text-white -mt-28">Soups</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
        <p className="text-4xl uppercase pl-16 text-white -mt-28">PIzzas</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
        <p className="text-4xl uppercase pl-16 text-white -mt-28">Desserts</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
        <p className="text-4xl uppercase pl-5 text-white -mt-28">Vegetables</p>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default FoodCategory;
