import { useSelector } from 'react-redux';
import CartCourse from './../../Shared/CartCourse';



const CoursesChannell = () => {

    const { publicData, User } = useSelector(state => state)

    let course = [];

    for (let i of publicData.topCourses) {
        if (i.channell === User.channell._id) {
            course.push(i)
        }
    }

    return (
        <div className="container">
            <div className="box-overflow">
                <div className="courses-userPanel">
                    {
                        course.length > 0 ?
                            course.map(i =>
                                < CartCourse key={i._id} id={i._id} image={i.image} title={i.title} desc={i.shortDesc} date={i.createdAt} />
                            )
                            :
                            <p>آموزشی برای نمایش وجود ندارد</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CoursesChannell