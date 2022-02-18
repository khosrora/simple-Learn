import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editChanellRequest } from '../../../../redux/actions/channellAction';





const EditChannell = () => {

    const { User, Load } = useSelector(state => state);

    const initialState = {
        name: User.channell.name,
        shortDesc: User.channell.shortDesc,
        desc: User.channell.desc,
        linkAparat: User.channell.linkAparat,
        permission: User.channell.permission,
        id: "",
    }

    const dispatch = useDispatch();

    const [editChannell, setEditChannell] = useState(initialState);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setEditChannell({ ...editChannell, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            editChannell.id = User.channell._id
            editChannell.permission = false;
            if (!editChannell.name || !editChannell.shortDesc || !editChannell.desc || !editChannell.linkAparat || !editChannell.id) {
                alert("error")
            }

            dispatch(editChanellRequest(editChannell));
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className='editChannell'>
            <form className='form-panel' onSubmit={handleSubmit}>
                <p>نام  : </p>
                <input className="form-input" value={editChannell.name} onChange={handleChangeInput} name="name" type="name" placeholder="نام کانال *" />
                <p>توضیحات کوتاه : </p>
                <textarea className="form-input" value={editChannell.shortDesc} onChange={handleChangeInput} component="textarea" rows="3" name="shortDesc" type="text" placeholder="نام کانال *" />
                <p>توضیحات : </p>
                <textarea className="form-input" value={editChannell.desc} onChange={handleChangeInput} component="textarea" rows="6" name="desc" type="text" placeholder="نام کانال *" />
                <p>لینک کانال  :  (آپارات / یوتیوب)</p>
                <input className="form-input" value={editChannell.linkAparat} onChange={handleChangeInput} name="linkAparat" type="text" placeholder="نام کانال *" />
                <button type="submit">
                    {Load.isSend ? "در حال ارسال اطلاعات" : "ارسال"}
                </button>
            </form>
        </div>
    )
}

export default EditChannell