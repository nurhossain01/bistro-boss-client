import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(3);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section>
      <SectionTitle
        heading={"What Our Client Say"}
        subHeading={"testimonials"}
      ></SectionTitle>
      <div>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            reviews?.map(review => <SwiperSlide
              key={review._id}
            >
              <div className="m-20">
                <div className="flex justify-center pb-4">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
                <div className="flex justify-center pb-4 text-7xl">
                  <FaQuoteLeft />
                </div>
                <p>{review.details}</p>
                <h3 className="text-2xl text-center pt-4 text-red-400">{review.name}</h3>
              </div>
            </SwiperSlide>)
          }


        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;