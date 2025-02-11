import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:mx-36 mx-10 flex flex-col items-center text-center space-y- ">
            <Rating className="mb-10" style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <FaQuoteLeft className=" size-32"/>
              <p className="md:py-8 py-4">{review.details}</p>
              <h2 className="text-3xl text-[#ffb23f] font-semibold">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
