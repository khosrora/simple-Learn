import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

import CartChannell from '../../../Shared/CartChannell';
import Title from "../../../Shared/Title";




const BestChanells = () => {

    const { publicData } = useSelector(state => state);

    return (
        <div className='bests'>
            <div className="details-bests title-hover">
                <Title title="پربازدید ترین ها" link="/allChannells" desc="در این وب سایت بیشترین بازدید ها از این کانال ها بوده ... !!!" />
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
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            publicData.topChannells.slice(0, 8).map(i =>
                                <SwiperSlide key={i._id}>
                                    <CartChannell slug={i.slug} name={i.name} shortDesc={i.shortDesc} image={i.image ? i.image.thumb : "http://localhost:4000/uploads/images/channell/default.png"} view={i.view} />
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
