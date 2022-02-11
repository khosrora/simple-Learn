import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestChannel } from '../../../redux/actions/channellAction';
import { errorMessage } from '../../utilities/Toastify';

// ! initial data
const init = {
    name: "",
    shortDesc: "",
    desc: "",
    linkAparat: "",
}


const CreateChannel = () => {

    const dispatch = useDispatch();

    const [channell, setChannell] = useState(init);
    const [file, setFile] = useState();

    const { User, Load } = useSelector(state => state);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setChannell({ ...channell, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {

            var data = new FormData();
            data.append('file', file);
            data.append('name', channell.name);
            data.append('shortDesc', channell.shortDesc);
            data.append('desc', channell.desc);
            data.append('linkAparat', channell.linkAparat);
            data.append('userId', User.user._id);

            dispatch(requestChannel(data));

        } catch (err) {
            errorMessage("متاسفانه مشکلی رخ داده است");
        }
    }



    return (
        <div className="container">
            <div className="box-overflow">
                {
                    User.user.isSendChannell
                        ?
                        <div className="alert">
                            <p>درخواست شما ارسال شده است.</p>
                        </div>
                        :
                        <form className="form-panel" style={{ width: "70%" }} >
                            <p>نام کانال : </p>
                            <input type="text" className="form-input" name='name' value={channell.name} onChange={handleChangeInput} />
                            <p>توضیحات کوتاه : </p>
                            <input type="text" className="form-input" name='shortDesc' value={channell.shortDesc} onChange={handleChangeInput} />
                            <p>توضیحات  : </p>
                            <input type="text" className="form-input" name='desc' value={channell.desc} onChange={handleChangeInput} />
                            <p>لینک ویدیو  : </p>
                            <input type="text" className="form-input" name='linkAparat' value={channell.linkAparat} onChange={handleChangeInput} />
                            <p>عکس  : </p>
                            <input type="file" className="form-input" name='file' onChange={e => setFile(e.target.files[0])} />
                            {
                                Load.sendData ?
                                    <button type='submit' className='btn-white' disabled>در حال ارسال اطلاعات</button>
                                    :
                                    <button type='submit' className='btn-white' onClick={handleSubmit}>ثبت کانال جدید</button>

                            }
                        </form>
                }
            </div>
        </div>
    );
};

export default CreateChannel;
