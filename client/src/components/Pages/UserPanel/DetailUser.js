import { useState } from 'react'
import { useSelector } from 'react-redux';
import EditChannell from './forms/EditChannell';



const DetailUser = () => {

    const { User } = useSelector(state => state);
    const [editModal, setEditModal] = useState(false)


    return (
        <div className="container">
            <div className="box-overflow">
                <div className="border-detailUser">
                    <p>نام و نام خانوادگی : <br /> <span>{User.user.fullname}</span></p>
                    <p>پست الکترونیک : <br /> <span>{User.user.email}</span></p>
                    <p>شماره تماس : <br /> <span>{User.user.mobile}</span></p>
                </div>
                <hr />
                {
                    User.channell &&
                    <div>
                        <div className="border-detailUser">
                            <p>نام کانال : <br /> <span>{User.channell.name}</span></p>
                            <p>لینک آپارات : <br /> <a target="_blank" rel='noreferrer' href={User.channell.linkAparat} >{User.channell.linkAparat}</a></p>
                            <p>توضیحات کوتاه : <br /> <span>{User.channell.shortDesc}</span></p>
                            <p>توضیحات  : <br /> <span>{User.channell.desc}</span></p>
                            {
                                User.channell.permission ?
                                    <p>کانال شما تایید شده است</p>
                                    :
                                    <p>در انتظار تایید مدیریت</p>
                            }
                        </div>
                        <button className='btn-white' onClick={() => setEditModal(!editModal)}>ویرایش کانال</button>
                    </div>
                }
                {
                    User.channell &&
                        editModal ?
                        <EditChannell />
                        :
                        null
                }
            </div>
        </div>
    );
};

export default DetailUser;
