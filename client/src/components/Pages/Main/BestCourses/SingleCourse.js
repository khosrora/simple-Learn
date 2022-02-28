import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Jalali from './../../../Shared/Jalali';
import { getCourse } from './../../../../redux/actions/courseAction';
import SkeltonMe from './../../Loading/SkeltonMe';

const SingleCourse = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourse(location.pathname))
    }, [dispatch, location.pathname])

    const { course } = useSelector(state => state);
    function ShowHtml() {
        if (course.singleCourse) {
            let body = course.singleCourse.content;
            return (
                <div dangerouslySetInnerHTML={{ __html: body }} />
            )
        }
    }
    return (
        <div>
            {
                course.singleCourse ?
                    <div>
                        <div className='singleCourse'>
                            <div className="title-singleocurse" >
                                <div className="image-title">
                                    <img src={course.singleCourse.image.image} alt={course.singleCourse.title} />
                                </div>
                                <div className="details-title">
                                    <p>نام آموزش : <span>{course.singleCourse.title}</span></p>
                                    <p>نام کانال : <span>{course.channell.name}</span></p>
                                    <p>توضیحات کوتاه : <span>
                                        {course.singleCourse.shortDesc}
                                    </span></p>
                                    <p>تاریخ : <span><Jalali date={course.singleCourse.createdAt} /></span></p>
                                    <p>تعداد بازدید : <span>{course.singleCourse.view}</span></p>
                                    <a href={course.channell.linkAparat} target="_blank" rel="noreferrer">لینک کانال</a>
                                </div>
                            </div >
                            <div className="contet">
                                {ShowHtml()}
                            </div>
                        </div>
                    </div>
                    :
                    <SkeltonMe count={5} height={100} />
            }
        </div>

    )
}

export default SingleCourse