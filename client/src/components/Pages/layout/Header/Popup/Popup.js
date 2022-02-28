import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Popup = () => {

    const { User } = useSelector(state => state)

    return (
        <li>
            <div className='popup'>
                <p>
                   بعد از اینکه در ثبت نام کردی میتونی کانال خودت رو بسازی و آموزش های کوتاه خودت رو منتشر کنی
                </p>
                {
                    User.token
                        ?
                        null
                        :
                        <Link to="/auth" className='btn-dark'>لطفا ثبت نام کنید</Link>
                }

            </div>
        </li>
    );
};

export default Popup;
