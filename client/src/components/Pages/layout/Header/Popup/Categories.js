import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
                    دسته بندی ها
                </p>
            </div>
            <hr />

            {
                arr.map(cate => (
                    <li key={cate._id} className='list-categories' ><Link to={`/cateCourse/${cate._id}`}> {cate.name} </Link>
                    </li>
                ))
            }
        </ul >
    );
};

export default Categories;
