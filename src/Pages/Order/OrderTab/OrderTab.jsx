import React from 'react';
import FoodCart from '../../../Component/FoodCart/FoodCart';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ orderItems }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 mx-auto mt-16 gap-5 mb-14">
            {
              orderItems.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;