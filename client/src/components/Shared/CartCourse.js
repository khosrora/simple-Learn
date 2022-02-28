import React from 'react'
import { Link } from 'react-router-dom';
import Jalali from './Jalali';
import MyImage from './LazyImage';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../utilities/Toastify';
import { deleteCourse } from "../../redux/actions/courseAction"



const CartCourse = ({ image, title, desc, date, del, id, slug }) => {

    const dispatch = useDispatch();

    const deleteCours = async (id) => {
        try {
            await dispatch(deleteCourse(id))
        } catch (err) {
            console.log(err);
            errorMessage("لطفا دوباره امتحان کنید")
        }
    }

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
                {
                    del
                        ?
                        <>
                            <div className="del" onClick={() => deleteCours(id)}><i className='fas fa-trash'></i></div>
                            <Link to={`course/${slug}`}>مشاهده بیشتر</Link>
                        </>
                        :
                        <Link to={`course/${slug}`}>مشاهده بیشتر</Link>
                }
                <Jalali date={date} />
            </div>
        </div>
    )
}

export default CartCourse