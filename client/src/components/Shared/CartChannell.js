import React from 'react';
import { Link } from 'react-router-dom';
import MyImage from './LazyImage';
import Jalali from './Jalali';

const CartChannell = ({ slug, name, shortDesc, image, view, createdAt }) => {

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
                            shortDesc.length < 90
                                ? `${shortDesc}`
                                : `${shortDesc.substring(0, 90)}...`
                        }
                    </span>
                    <div className="detail-cart-channell">
                        <p> بازدید : {view}</p>
                        <div className="">
                            {
                                <Jalali date={createdAt} />
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CartChannell;
