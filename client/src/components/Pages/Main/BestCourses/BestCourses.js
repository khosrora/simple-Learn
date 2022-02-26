import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Title from "../../../Shared/Title";
import CartCourse from './../../../Shared/CartCourse';




const BestCourses = ({ topCourses }) => {


    return (
        <div className='bests'>
            <div className="details-bests title-hover">
                <Title title="پربازدید ترین آموزش ها" link="/allCourses" desc="در این وب سایت بیشترین بازدید ها از این آموزش ها بوده ... !!!" />
                <div className="canals-section">
                    <Swiper
                        slidesPerGroup={3}
                        loop={false}
                        loopFillGroupWithBlank={true}
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
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            topCourses.slice(0 , 8).map(i =>
                                <SwiperSlide key={i._id}>
                                    <CartCourse image={i.image.thumb} title={i.title} desc={i.shortDesc} date={i.createdAt} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default BestCourses;
