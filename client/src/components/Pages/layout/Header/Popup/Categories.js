import React from 'react';
import { Link } from 'react-router-dom';
import SubCategories from './SubCategories';

const Categories = () => {
    return (
        <ul className='categories'>
            <div className="title-categories">
                <p>
                    دسته بندی های اصلی
                </p>
            </div>
            <hr />
            <li className='list-categories'><Link> برنامه نویسی </Link>
                <SubCategories />
            </li>
            <li className='list-categories'><Link> برنامه نویسی </Link>
                <SubCategories />
            </li>
            <li className='list-categories'><Link> برنامه نویسی </Link>
                <SubCategories />
            </li>
        </ul>
    );
};

export default Categories;
