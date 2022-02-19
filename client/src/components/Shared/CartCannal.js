import React from 'react';
import { Link } from 'react-router-dom';

const CartCannal = ({ name, shortDesc, image, view }) => {
    return (
        <Link to="#">
            <div className="cart-canal">
                <div className="image-canals-section">
                    <img src={image} alt={name} />
                </div>
                <div className="detail-image-section">
                    <p className='title-detail-cart-canal'>
                        {name}
                    </p>
                    <br />
                    <span>
                        {shortDesc}
                    </span>
                    <div className="detail-cart-canal">
                        <p> بازدید : {view}</p>
                        <p> ویدیو منتشر شده : 20</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CartCannal;
