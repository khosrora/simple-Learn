import React from 'react';
import { Link } from 'react-router-dom';
import MyImage from './LazyImage';

const CartChannell = ({ slug, name, shortDesc, image, view }) => {

    console.log(image);
    return (
        <div className="cart-channell">
            <Link to={`channell/${slug}`}>
                <div className="image-canals-section">
                    <MyImage url={image} name={name} />
                </div>
                <div className="detail-image-section">
                    <p className='title-detail-cart-channell'>
                        {name}
                    </p>
                    <br />
                    <span>
                        {
                            shortDesc.length < 50
                                ? `${shortDesc}`
                                : `${shortDesc.substring(0, 90)}...`
                        }
                    </span>
                    <div className="detail-cart-channell">
                        <p> بازدید : {view}</p>
                        <p> ویدیو منتشر شده : 20</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CartChannell;
