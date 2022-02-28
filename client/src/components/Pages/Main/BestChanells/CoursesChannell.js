import { useState } from 'react';
import CartCourse from '../../../Shared/CartCourse';

const CoursesChannell = ({ channellId, courses, sort }) => {

    const [search, setSearch] = useState("");

    const course = [];
    for (let i of courses) {
        if (channellId === i.channell) {
            course.push(i)
        }
    }


    return (
        <>
            <div className="search-singleChannell">
                <div className="details-search">
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='نام آموزش را بنویسید' />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div div className='courseChannell'>
                <div className="courses">

                    {
                        course.length > 0 ?
                            course.sort(a => sort ? 1 : -1).map(i => {
                                return i.title.includes(search) ?
                                    <CartCourse key={i._id} id={i._id} image={i.image.thumb } title={i.title} desc={i.shortDesc} date={i.createdAt} />
                                    :
                                    null
                            }
                            )
                            :
                            <p>آموزشی برای نمایش وجود ندارد</p>
                    }
                </div>
            </div >
        </>
    )
}

export default CoursesChannell