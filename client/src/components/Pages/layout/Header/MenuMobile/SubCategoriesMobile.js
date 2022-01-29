import { Link } from 'react-router-dom';

const SubCategoriesMobile = ({ categories, id, }) => {


    let arr = [];
    for (let i of categories) {
        if (i.parent != null && i.parent === id) {
            arr.push(i)
        }
    }

    return (

        <ul className='menu-sub-category'>
            {
                arr.map(i => (
                    <li key={i._id}><Link to="#">{i.name}</Link></li>
                ))
            }

        </ul>
    );
};

export default SubCategoriesMobile;
