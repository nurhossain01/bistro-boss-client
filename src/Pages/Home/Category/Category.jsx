import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section className='mx-auto'>
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"order online"}
      >
      </SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 w-2/3"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className='uppercase -mt-14 text-center font-bold text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className='uppercase -mt-14 text-center font-bold text-white'>soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className='uppercase -mt-14 text-center font-bold text-white'>desserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className='uppercase -mt-14 text-center font-bold text-white'>soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className='uppercase -mt-14 text-center font-bold text-white'>salad</p>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default Category;