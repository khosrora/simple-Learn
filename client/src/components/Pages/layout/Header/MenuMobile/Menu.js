import { useState } from 'react';
import CategoriesMobile from './CategoriesMobile';
import SubMenu from './SubMenu';

const Menu = ({ setMenu, user, alert }) => {

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
                    <CategoriesMobile />
                    :
                    <SubMenu user={user} alert={alert}/>
            }
        </div>
    );
};

export default Menu;
