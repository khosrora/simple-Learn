import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './../../../../../redux/actions/authAction';

const SubMenu = ({ user, alert }) => {

    const dispatch = useDispatch();    

    return (
        <ul className='sub-menu'>
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/">درباره ما</Link></li>
            <li><Link to="/">تماس با ما</Link></li>
            <li><Link to="/">همکاری با ما</Link></li>
            {
                user.token
                    ?
                    <li><Link onClick={() => { dispatch(logout()) }} to="#">
                        {
                            alert.load 
                            ?
                            "زود برگردی"
                            :
                            "خروج" 
                        }
                        </Link></li>
                    :
                    <li><Link to="/auth">ورود / ثبت نام</Link></li>
            }
        </ul>
    );
};

export default SubMenu;
