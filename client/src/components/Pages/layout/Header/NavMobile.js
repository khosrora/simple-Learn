import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './MenuMobile/Menu';

const NavMobile = () => {

    const [menu, setMenu] = useState(false);
    console.log(menu);

    return (
        <div>
            <div className="navMobile">
                <div onClick={() => setMenu(true)}>
                    <i class="fas fa-bars"></i>
                </div>
                <h4 className="">آسان یاد بگیر !!</h4>
                <Link to="/auth"><i className='fas fa-user'></i></Link>
            </div>

            {
                menu && <Menu setMenu={setMenu} />
            }

        </div>
    );
};

export default NavMobile;
