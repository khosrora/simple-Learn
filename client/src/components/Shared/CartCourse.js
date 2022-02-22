import React from 'react'
import { Link } from 'react-router-dom';

const CartCourse = () => {
    return (
        <div className="cart-course">
            <div className="img-cart-course">
                <img src="./assets/images/1.webp" alt="" />
            </div>
            <div className="detail-cart-course">
                <div className="title">
                    <h4>آموزش برنامه نویسی</h4>
                </div>
                <div className="desc">
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                </div>
                <div className="writer">
                    <p>خسرو رسولی</p>
                </div>
            </div>
            <div className="links-cart-course">
                <Link>مشاهده بیشتر</Link>
                <p>20 بهمن 1400</p>
            </div>
        </div>
    )
}

export default CartCourse