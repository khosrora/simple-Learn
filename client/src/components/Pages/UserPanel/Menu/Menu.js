import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from "../../../../redux/actions/authAction";

const Menu = () => {

    const [Menu, setMenu] = useState(true);

    const { User } = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshToken());
    }, [dispatch])

    return (
        <div>
            <div className={Menu ? "userpanel-List" : "userpanel-List-mobile"}>
                <ul>
                    {
                        User.channell
                            ?
                            <>
                                <li>
                                    <Link to="/">مشاهده کانال</Link>
                                </li>
                                <li>
                                    <Link to="/userpanel/createCourse">ایجاد آموزش</Link>
                                </li>
                                <li>
                                    <Link to="/userpanel/createGallery">گالری تصاویر</Link>
                                </li>
                            </>
                            :
                            <li>
                                <Link to="/userpanel/createChannel">ایجاد کانال</Link>
                            </li>
                    }
                    <li>
                        <Link to="/userpanel">توضیحات</Link>
                    </li>
                    <li>
                        <Link to="/userpanel/detailUser">اطلاعات شما</Link>
                    </li>
                    <li>
                        <Link to="#">ویدیو های ثبت شده</Link>
                    </li>
                    <li>
                        <Link to="#">پیام ها</Link>
                    </li>
                </ul>
            </div>
            {
                Menu ?
                    <div className="open-menu" style={Menu ? { right: 0 } : { left: 0 }} onClick={() => { setMenu(false) }}>
                        <i className="fas fa-cog"></i>
                    </div>
                    :
                    <div className="open-menu" style={Menu ? { right: 0 } : { left: 0 }} onClick={() => { setMenu(true) }}>
                        <i className="fas fa-cog"></i>
                    </div>
            }
        </div>
    );
};

export default Menu;
