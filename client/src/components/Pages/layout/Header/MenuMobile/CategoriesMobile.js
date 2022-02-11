import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SubCategoriesMobile from './SubCategoriesMobile';

const CategoriesMobile = () => {

    const [open, setOpen] = useState(false)
    const { Categories } = useSelector(state => state);


    let arr = [];
    if (Categories.categories) {
        for (let i of Categories.categories) {
            if (i.parent === null) {
                arr.push(i)
            }
        }
    }

    return (
        <div>
            <div className="parent-sub-category">
                <ul className='sub-category'>
                    {
                        arr.map(cate => (
                            <li key={cate._id}><Link>{cate.name}</Link>
                                {
                                    open ? <div onClick={() => { setOpen(false) }}><i i className="fas fa-chevron-up" ></i></div> : <div onClick={() => { setOpen(true) }}><i className="fas fa-chevron-down"></i></div>
                                }
                                {
                                    open &&
                                    <SubCategoriesMobile categories={Categories.categories} id={cate._id}  />
                                }

                            </li>
                        ))
                    }
                </ul>
                {
                    // open
                    //     ?
                    //     <div onClick={() => { setOpen(false) }}>
                    //         <i className="fas fa-chevron-up" ></i>
                    //     </div>
                    //     :
                    //     <div onClick={() => { setOpen(true) }}>
                    //         <i className="fas fa-chevron-down"></i>
                    //     </div>
                }
            </div >
        </div >
    );
};

export default CategoriesMobile;
