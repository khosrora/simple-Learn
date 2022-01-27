import { useState } from 'react';
import SubCategory from './SubCategory';
import SubMenu from './SubMenu';

const Menu = ({ setMenu }) => {

    const [category, setCategory] = useState(false)

    return (
        <div className="menu-mobile">
            <div className="buttons-menu">
                <p onClick={() => { setCategory(false) }}>منو</p>
                <p onClick={() => { setCategory(true) }}>دسته بندی</p>
            </div>
            <hr />
            <div className="close-menu" onClick={() => { setMenu(false) }}>
                <i className='fas fa-times'></i>
            </div>
            {
                category
                    ?
                    <SubCategory />
                    :
                    <SubMenu />
            }
        </div>
    );
};

export default Menu;
