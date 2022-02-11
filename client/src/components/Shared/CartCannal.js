import React from 'react';
import { Link } from 'react-router-dom';

const CartCannal = () => {
    return (
        <Link to="#">
            <div className="cart-canal">
                <div className="image-canals-section">
                    <img src="/assets/images/wp4923981-react-js-wallpapers.jpg" alt="" />
                </div>
                <div className="detail-image-section">
                    <p className='title-detail-cart-canal'>
                       با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                    <br />
                    <span>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </span>
                    <div className="detail-cart-canal">
                        <p> بازدید : 6</p>
                        <p> ویدیو منتشر شده : 20</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CartCannal;
