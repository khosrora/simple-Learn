import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import CartCannal from './CartCannal';




const BestCanals = () => {
    return (
        <div className='bestCanals'>
            <div className="details-bestcanal">
                <div className="title-details">
                    <p>پر بازدید ترین ها</p>
                    <span>
                        در این وب سایت بیشترین بازدید ها از این کانال ها بوده ... !!!
                    </span>
                </div>
                <div className="canals-section">
                    <Swiper
                        slidesPerGroup={3}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 60,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CartCannal />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BestCanals;
