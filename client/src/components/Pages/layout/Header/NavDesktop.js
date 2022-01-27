import { Link } from 'react-router-dom';
import Popup from './Popup/Popup';
import Categories from './Popup/Categories';

const NavDesktop = () => {

    return (
        <div className="navbar">
            <div className="navbar-desktop">
                <div className="details">
                    <div className="search">
                        <input type="text" placeholder='جست و جو کنید' />
                        <i className='fas fa-search'></i>
                    </div>
                    <div>
                        <Link to="/auth" className='btn-dark'><i className='fa fa-user'></i> ورود / ثبت نام</Link>
                    </div>
                </div>

                <ul>
                    <li className='popup-parent'><Link to="#" className='btn-white'><i className="fas fa-users"></i> درباره ما</Link>
                        <ul>
                            <Popup />
                        </ul>
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
