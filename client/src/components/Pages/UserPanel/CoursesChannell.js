import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartCourse from './../../Shared/CartCourse';
import CourseEdit from './forms/CourseEdit';



const CoursesChannell = () => {

    const [edit, setEdit] = useState(false)
    const [onEdit, setOnEdit] = useState({})

    const { publicData, User } = useSelector(state => state)

    let course = [];

    for (let i of publicData.topCourses) {
        if (i.channell === User.channell._id) {
            course.push(i)
        }
    }

    return (
        <div className="container">
            <div className="box-overflow edit-Course-Parent">
                <div className="courses-userPanel">
                    {
                        course.length > 0 ?
                            course.map(i =>
                                <>
                                    <CartCourse key={i._id} id={i._id} image={i.image.thumb} title={i.title} desc={i.shortDesc} date={i.createdAt} del={true} />
                                    <div className='edit' onClick={() => {
                                        setEdit(true)
                                        setOnEdit(i)
                                    }}><i class="fa-solid fa-pen-to-square"></i></div>
                                </>
                            )
                            :
                            <p>آموزشی برای نمایش وجود ندارد</p>
                    }
                </div>
                {
                    edit
                        ?
                        <CourseEdit setEdit={setEdit} onEdit={onEdit} />
                        :
                        null
                }
            </div>
        </div>
    )
}

export default CoursesChannell