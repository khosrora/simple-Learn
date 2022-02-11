import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

import { getAllCategories } from './../../../../redux/actions/categoriesAction';
import { Link } from 'react-router-dom';


const Header = () => {


    const dispatch = useDispatch();

    const { User, Load } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <div>
            {
                User.token ?
                    <div className="panel-alert">
                        <Link to="/userpanel">از اینجا وارد پنل خود شوید</Link>
                    </div>
                    :
                    null
            }
            <NavDesktop user={User} alert={Load} />
            <NavMobile user={User} alert={Load} />
        </div>
    );
};

export default Header;
