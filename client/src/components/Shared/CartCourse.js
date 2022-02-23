import React from 'react'
import { Link } from 'react-router-dom';
import Jalali from './Jalali';
import MyImage from './LazyImage';

const CartCourse = ({ image, title, desc, date }) => {

    return (
        <div className="cart-course">
            <div className="img-cart-course">
                <MyImage url={image} name={title} />
            </div>
            <div className="detail-cart-course">
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="desc">
                    <p>
                        {
                            desc.length < 100
                                ? `${desc}`
                                : `${desc.substring(0, 100)}...`
                        }
                    </p>
                </div>
                <div className="writer">
                    <p>خسرو رسولی</p>
                </div>
            </div>
            <div className="links-cart-course">
                <Link to={"/"}>مشاهده بیشتر</Link>
                <Jalali date={date} />
            </div>
        </div>
    )
}

export default CartCourse