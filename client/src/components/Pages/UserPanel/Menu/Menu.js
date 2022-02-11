import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [Menu, setMenu] = useState(true);

    return (
        <div>
            <div className={Menu ? "userpanel-List" : "userpanel-List-mobile"}>
                <ul>
                    <li>
                        <Link to="/userpanel">توضیحات</Link>
                    </li>
                    <li>
                        <Link to="/userpanel/createChannel">ایجاد کانال</Link>
                    </li>
                    <li>
                        <Link to="/userpanel/createCourse">ایجاد آموزش</Link>
                    </li>
                    <li>
                        <Link to="/userpanel/detailUser">اطلاعات شما</Link>
                    </li>
                    <li>
                        <Link>ویدیو های ثبت شده</Link>
                    </li>
                    <li>
                        <Link>پیام ها</Link>
                    </li>
                </ul>
            </div>
            {
                Menu ?
                    <div className="open-menu" style={Menu ? { right: 0 } : { left: 0 }} onClick={() => { setMenu(false) }}>
                        <i class="fas fa-cog"></i>
                    </div>
                    :
                    <div className="open-menu" style={Menu ? { right: 0 } : { left: 0 }} onClick={() => { setMenu(true) }}>
                        <i class="fas fa-cog"></i>
                    </div>
            }
        </div>
    );
};

export default Menu;
