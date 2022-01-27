import { Link } from 'react-router-dom';

const SubMenu = () => {
    return (
        <ul className='sub-menu'>
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/">درباره ما</Link></li>
            <li><Link to="/">تماس با ما</Link></li>
            <li><Link to="/">همکاری با ما</Link></li>
            <li><Link to="/auth">ورود / ثبت نام</Link></li>
        </ul>
    );
};

export default SubMenu;
