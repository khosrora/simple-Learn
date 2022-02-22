import { useEffect } from 'react';
import TitleHeader from './../../layout/Header/TitleHeader';
import BestChanells from '../BestChanells/BestChanells';
import { useDispatch } from 'react-redux';
import { getChannells } from '../../../../redux/actions/publicAction';
import { useSelector } from 'react-redux';
import BestChanellsLoading from './../../Loading/BestChanellsLoading';
import BestCourses from '../BestCourses/BestCourses';

const Home = () => {

    const dispatch = useDispatch()

    const { publicData } = useSelector(state => state)

    useEffect(() => {
        dispatch(getChannells())
    }, [dispatch])

    return (
        <div>
            <TitleHeader />
            {
                publicData.topChannells
                    ? <BestChanells />
                    : <BestChanellsLoading />
            }
            <BestCourses />

        </div>
    );
};

export default Home;
