import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {

    const { User } = useSelector(state => state)

    return (
        <div className='footer'>
            <div className="pages">
                <ul className='title-pages'>
                    <li>
                        صفحات
                        <ul>
                            <li><Link to="#">تماس با ما</Link></li>
                            <li><Link to="#">درباره ما</Link></li>
                        </ul>
                    </li>
                    <li>
                        صفحات
                        <ul>
                            {
                                User.token
                                    ?
                                    <li><Link to="/userPanel">پنل کاربری</Link></li>
                                    :
                                    <>
                                        <li><Link to="/auth">ثبت نام</Link></li>
                                        <li><Link to="/auth">ورود</Link></li>
                                    </>
                            }
                        </ul>
                    </li>
                    <li>
                        صفحات
                        <ul>
                            <li><Link to="/channells">همه کانال ها</Link></li>
                            <li><Link to="/courses">همه آموزش ها</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="details">
                <p>گروه برنامه نویسی رابا</p>
                <p>
                    تمامی حقوق مادی و معنوی این سایت متعلق به گروه رابا می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد
                </p>
            </div>
        </div>
    )
};

export default Footer;
