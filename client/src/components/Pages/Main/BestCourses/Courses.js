import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartCourse from './../../../Shared/CartCourse';


const Courses = () => {

    const [search, setSearch] = useState("");
    const { publicData } = useSelector(state => state)

    const courses = publicData.topCourses;
    console.log(courses)

    return (
        <div className='single-publics'>
            <div className="title-single-publics">
                <div className="detail-public">
                    <h1>تمام آموزش ها</h1>
                    <p>به ترتیب بازدید...</p>
                    <p>تعداد آموزش ها : <span>300</span></p>
                </div>
                <div className="search-public">
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='نام آموزش را بنویسید' />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className="items-single-publics">
                {
                    courses.map(i => {
                        return i.title.includes(search)
                            ?
                            <CartCourse image={i.image.thumb} title={i.title} desc={i.shortDesc} date={i.createdAt} slug={i.slug} />
                            :
                            null
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Courses