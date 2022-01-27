import { useState } from 'react';
import { Link } from 'react-router-dom';

const SubCategory = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="parent-sub-category">
                <ul className='sub-category'>
                    <li><Link>برنامه نویسی</Link>
                        {
                            open &&
                            <ul className='menu-sub-category'>
                                <li><Link>هوش مصنوعی</Link></li>
                                <li><Link>موبایل</Link></li>
                                <li><Link>وب</Link></li>
                                <li><Link>جاوا اسکریپت</Link></li>
                                <li><Link>پایتون</Link></li>
                            </ul>
                        }
                    </li>
                </ul>
                {
                    open
                        ?
                        <div onClick={() => { setOpen(false) }}>
                            <i className="fas fa-chevron-up"></i>
                        </div>
                        :
                        <div onClick={() => { setOpen(true) }}>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                }
            </div>
            <div className="parent-sub-category">
                <ul className='sub-category'>
                    <li><Link>برنامه نویسی</Link>
                        {
                            open &&
                            <ul className='menu-sub-category'>
                                <li><Link>هوش مصنوعی</Link></li>
                                <li><Link>موبایل</Link></li>
                                <li><Link>وب</Link></li>
                                <li><Link>جاوا اسکریپت</Link></li>
                                <li><Link>پایتون</Link></li>
                            </ul>
                        }
                    </li>
                </ul>
                {
                    open
                        ?
                        <div onClick={() => { setOpen(false) }}>
                            <i class="fas fa-chevron-up"></i>
                        </div>
                        :
                        <div onClick={() => { setOpen(true) }}>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                }
            </div>
        </div>
    );
};

export default SubCategory;
