import { useSelector } from 'react-redux';
import CartCannal from '../../Shared/CartCannal';

const DetailUser = () => {

    const { User } = useSelector(state => state);

    return (
        <div className="container">
            <div className="box-overflow">
                <div className="border-detailUser">
                    <p>نام و نام خانوادگی : <span>{User.user.fullname}</span></p>
                    <p>پست الکترونیک : <span>{User.user.email}</span></p>
                    <p>شماره تماس : <span>{User.user.mobile}</span></p>
                </div>
                <hr />
                <div className="my-courses">
                    <h4>ویدیو های ثبت شده شما</h4>
                    <div className="my-courses-video">
                        <CartCannal />
                        <CartCannal />
                        <CartCannal />
                        <CartCannal />
                        <CartCannal />
                        <CartCannal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailUser;
