import { useEffect } from 'react';
import TitleHeader from './../../layout/Header/TitleHeader';
import BestChanells from '../BestChanells/BestChanells';
import { useDispatch } from 'react-redux';
import { getPublics } from '../../../../redux/actions/publicAction';
import { useSelector } from 'react-redux';
import BestCourses from '../BestCourses/BestCourses';
import SkeltonMe from './../../Loading/SkeltonMe';
import YouCan from './../Sections/YouCan';

const Home = () => {

    const dispatch = useDispatch()

    const { publicData } = useSelector(state => state)

    useEffect(() => {
        dispatch(getPublics())
    }, [dispatch])


    return (
        <div>
            <TitleHeader />
            {
                publicData.topChannells
                    ? <BestChanells />
                    : <SkeltonMe count={2} height={300} />
            }
            <YouCan />
            {
                publicData.topCourses
                    ? <BestCourses topCourses={publicData.topCourses} />
                    : <SkeltonMe count={2} height={100} />
            }
        </div>
    );
};

export default Home;
