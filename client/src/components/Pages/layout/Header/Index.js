import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import TitleHeader from './TitleHeader';

import { getAllCategories } from './../../../../redux/actions/categoriesAction';

const Index = () => {

    const dispatch = useDispatch();

    const { User , Alert } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return (
        <div>
            <NavDesktop user={User} alert= {Alert} />
            <NavMobile user={User} alert= {Alert} />
            <TitleHeader />
        </div>
    );
};

export default Index;
