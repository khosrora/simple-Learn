import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoriesMobile = () => {

    const { Categories } = useSelector(state => state);


    let arr = [];
    if (Categories.categories) {
        for (let i of Categories.categories) {
            if (i.parent === null) {
                arr.push(i)
            }
        }
    }

    return (
        <div>
            <div className="parent-sub-category">
                <ul className='sub-category'>
                    {
                        arr.map(cate => (
                            <li key={cate._id}><Link to={`/cateCourse/${cate._id}`}>{cate.name}</Link></li>
                        ))
                    }
                </ul>
            </div >
        </div >
    );
};

export default CategoriesMobile;
