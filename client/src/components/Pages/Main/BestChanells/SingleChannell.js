import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getSingleChannell } from '../../../../redux/actions/channellAction';
import SingleChannellLoading from './../../Loading/SingleChannellLoading';


const SingleChannell = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const [aboutChannell, setAboutChannell] = useState(false);

    useEffect(() => {
        dispatch(getSingleChannell(location.pathname))
    }, [dispatch, location.pathname])

    const { channell } = useSelector(state => state);
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
                                    channell.singleChannell.desc.length < 250
                                        ? `${channell.singleChannell.desc}`
                                        : `${channell.singleChannell.desc.substring(0, 250)}...`
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
                                <li>قدیمی ترین ها</li>
                                <li>جدیدترین</li>
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
                aboutChannell
                    ?
                    <p>آموزش ها</p>
                    :
                    <p>درباره کانال</p>
            }
        </div>
    )
}

export default SingleChannell