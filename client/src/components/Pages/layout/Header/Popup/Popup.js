import { Link } from 'react-router-dom';

const Popup = ({ text, url }) => {
    return (
        <li>
            <div className='popup'>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
                <Link className='btn-dark'>بیشتر بخوانید</Link>
            </div>
        </li>
    );
};

export default Popup;
