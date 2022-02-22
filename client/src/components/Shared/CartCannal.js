import React from 'react';
import { Link } from 'react-router-dom';

const CartCannal = ({ slug, name, shortDesc, image, view }) => {


    return (
        <div className="cart-canal">
            <Link to={`channell/${slug}`}>
                <div className="image-canals-section">
                    <img src={image} alt={name} />
                </div>
                <div className="detail-image-section">
                    <p className='title-detail-cart-canal'>
                        {name}
                    </p>
                    <br />
                    <span>
                        {
                            shortDesc.length < 100
                                ? `${shortDesc}`
                                : `${shortDesc.substring(0, 100)}...`
                        }
                    </span>
                    <div className="detail-cart-canal">
                        <p> بازدید : {view}</p>
                        <p> ویدیو منتشر شده : 20</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CartCannal;
