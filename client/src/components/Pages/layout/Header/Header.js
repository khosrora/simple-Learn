import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

import { getAllCategories } from './../../../../redux/actions/categoriesAction';


const Header = () => {


    const dispatch = useDispatch();

    const { User, Alert } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <div>
            <NavDesktop user={User} alert={Alert} />
            <NavMobile user={User} alert={Alert} />
        </div>
    );
};

export default Header;
