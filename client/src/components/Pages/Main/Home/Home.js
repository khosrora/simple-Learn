import { useEffect } from 'react';
import TitleHeader from './../../layout/Header/TitleHeader';
import BestChanells from '../BestChanells/BestChanells';
import { useDispatch } from 'react-redux';
import { getChannells } from '../../../../redux/actions/publicAction';
import { useSelector } from 'react-redux';
import BestCourses from '../BestCourses/BestCourses';
import SkeltonMe from './../../Loading/SkeltonMe';

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
                    : <SkeltonMe count={2} height={300} />
            }
            {
                publicData.topCourses
                    ? <BestCourses topCourses={publicData.topCourses} />
                    : <SkeltonMe count={2} height={100} />
            }

        </div>
    );
};

export default Home;
