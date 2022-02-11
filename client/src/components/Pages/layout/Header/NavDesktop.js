import { Link } from 'react-router-dom';
import Popup from './Popup/Popup';
import Categories from './Popup/Categories';
import { logout } from './../../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';


const NavDesktop = ({ user, alert }) => {

    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="navbar-desktop">
                <div className="details">
                    <div className="search">
                        <input type="text" placeholder='جست و جو کنید' />
                        <i className='fas fa-search'></i>
                    </div>
                    <div>
                        {
                            user.token
                                ?
                                alert.wait
                                    ?
                                    <Link onClick={() => { dispatch(logout()) }} to="#" className='btn-dark'><i className='fa fa-sign-out-alt' style={{ marginLeft: "1rem" }}></i>
                                    زود برگردی
                                    </Link>
                                    :
                                    <Link onClick={() => { dispatch(logout()) }} to="#" className='btn-dark'><i className='fa fa-sign-out-alt' style={{ marginLeft: "1rem" }}></i>
                                        خروج
                                    </Link>
                                :
                                <Link to="/auth" className='btn-dark'><i className='fa fa-user'></i>
                                    ورود / ثبت نام
                                </Link>
                        }
                    </div>
                </div>

                <ul>
                    <li className='popup-parent'><Link to="/" className='btn-white'><i className="fas fa-home"></i>خانه</Link>
                    </li>
                    <li className='popup-parent'><Link to="#" className='btn-white'><i className="fas fa-user-friends"></i> با ما همکاری کن</Link>
                        <ul>
                            <Popup />
                        </ul>
                    </li>
                    <li className='parent-categories'><Link to="#" className='btn-red'><i className="fas fa-list-ul"></i> دسته بندی </Link>
                        <Categories />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavDesktop;
