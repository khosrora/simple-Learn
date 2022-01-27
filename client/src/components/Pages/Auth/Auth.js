import { useState } from 'react';



// ! pages
import Login from './Login';
import Register from './Register';

const Auth = () => {

    const [page, setPage] = useState(true);

    return (
        <div className="auth-page">
            <div className="detail">
                <div>
                    <h1>خوش آمدید</h1>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    </p>
                    {
                        page
                            ?
                            <button onClick={() => { setPage(false) }}>ثبت نام</button>
                            :
                            <button onClick={() => { setPage(true) }}>ورود</button>
                    }
                </div>
            </div>
            <div className="form">
                {
                    page ? <Login setPage={setPage} /> : <Register setPage={setPage} />
                }
            </div>

        </div>
    );
};

export default Auth;
