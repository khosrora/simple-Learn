import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import CartCannal from '../../../Shared/CartCannal';
import { Link } from 'react-router-dom';




const BestChanells = () => {

    const { publicData } = useSelector(state => state);

    return (
        <div className='bests'>
            <div className="details-bests title-hover">
                <div className="title-details">
                    <p>پر بازدید ترین ها <Link to="#">مشاهده همه</Link></p>
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
                        {
                            publicData.topChannells.map(i =>
                                <SwiperSlide key={i._id}>
                                    <CartCannal slug={i.slug} name={i.name} shortDesc={i.shortDesc} image={i.image} view={i.view} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default BestChanells;
