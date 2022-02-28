import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

import { getAllCategories } from './../../../../redux/actions/categoriesAction';
import { Link } from 'react-router-dom';


const Header = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const { User, Load } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <div>
            {
                location.pathname === "/" ?
                    User.token ?
                        <Link to="/userpanel" className="panel-alert">
                            <i class="fa-solid fa-house-chimney-user"></i>
                        </Link>
                        :
                        null
                    :
                    null
            }
            <NavDesktop user={User} alert={Load} />
            <NavMobile user={User} alert={Load} />
        </div>
    );
};

export default Header;
