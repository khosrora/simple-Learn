import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getSingleChannell } from '../../../../redux/actions/channellAction';
import SingleChannellLoading from './../../Loading/SingleChannellLoading';
import AboutChannell from './AboutChannell';
import SkeltonMe from './../../Loading/SkeltonMe';
import CoursesChannell from './CoursesChannell';


const SingleChannell = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const [aboutChannell, setAboutChannell] = useState(false);
    const [sort, setSort] = useState(false);
    

    useEffect(() => {
        dispatch(getSingleChannell(location.pathname))
    }, [dispatch, location.pathname])

    const { channell, publicData } = useSelector(state => state);



    return (
        <div>
            {
                channell.singleChannell
                    ?
                    <div className='title-Channell' style={{ backgroundImage: `url('${channell.singleChannell.image}')` }}>
                        <div className="container-channell">
                            <h1>{channell.singleChannell.name}</h1>
                            <div className="list-channell">
                                <ul>
                                    <li><Link to="/">خانه</Link></li>
                                    <li>{channell.singleChannell.name}</li>
                                </ul>
                            </div>
                            <p>
                                {
                                    channell.singleChannell.shortDesc.length < 250
                                        ? `${channell.singleChannell.shortDesc}`
                                        : `${channell.singleChannell.shortDesc.substring(0, 250)}...`
                                }
                            </p>
                            <a href={channell.singleChannell.linkAparat} target="_blank" rel='noreferrer'>
                                لینک کانال آموزش
                            </a>
                            <div className="detail-channell">
                                <p>
                                    {channell.singleChannell.view} بازدید
                                </p>
                                <p>
                                    تاریخ ثبت : 9 / 10 / 1399
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <SingleChannellLoading />
            }
 
            <div className="tab-items">
                <ul>
                    {
                        aboutChannell
                            ?
                            <>
                                <li onClick={() => setSort(true)}>قدیمی ترین ها</li>
                                <li onClick={() => setSort(false)}>جدیدترین</li>
                            </>
                            :
                            null
                    }
                    <li onClick={() => setAboutChannell(!aboutChannell)}>
                        {
                            aboutChannell
                                ?
                                "درباره کانال"
                                :
                                "آموزش های منتشر شده"
                        }
                    </li>
                </ul>
            </div>
            {
                channell.admin ?
                    aboutChannell
                        ?
                        <CoursesChannell channellId={channell.singleChannell._id} courses={publicData.topCourses} sort={sort} />
                        :
                        <AboutChannell name={channell.admin.fullname} email={channell.admin.email} shortDesc={channell.singleChannell.shortDesc} desc={channell.singleChannell.desc} />
                    :
                    <SkeltonMe count={1} height={300} />
            }
        </div>
    )
}

export default SingleChannell