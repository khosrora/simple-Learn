import { Link } from 'react-router-dom';

const SubCategories = ({ categories, id }) => {

    let arr = [];
    for (let i of categories) {
        if (i.parent != null && i.parent === id) {
            arr.push(i)
        }
    }


    return (
        <ul>
            <li style={{marginTop : 0}}>دسته های فرعی</li>
            <hr />
            {
                arr.map(i => (
                    <li key={i._id}><Link to="#">{i.name}</Link></li>
                ))
            }
        </ul>
    );
};

export default SubCategories;
