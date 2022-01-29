import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubCategories from './SubCategories';

const Categories = () => {

    const { Categories } = useSelector(state => state)

    let arr = [];
    if (Categories.categories) {
        for (let i of Categories.categories) {
            if (i.parent === null) {
                arr.push(i)
            }
        }
    }

    return (
        <ul className='categories'>
            <div className="title-categories">
                <p>
                    دسته بندی های اصلی
                </p>
            </div>
            <hr />

            {
                arr.map(cate => (
                    <li key={cate._id} li className='list-categories' ><Link> {cate.name} </Link>
                        <SubCategories categories={Categories.categories} id={cate._id}/>
                    </li>
                ))
            }
        </ul >
    );
};

export default Categories;
