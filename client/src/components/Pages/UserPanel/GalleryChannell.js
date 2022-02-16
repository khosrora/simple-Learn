import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { changeImageChannell, deleteImage } from './../../../redux/actions/galleryAction';
import MyImage from './../../Shared/LazyImage';

const GalleryChannell = ({ id, url, name }) => {

    const [cover, setCover] = useState(false)
    const [copy, setCopy] = useState(false)

    const { User, Load } = useSelector(state => state)

    const dispatch = useDispatch();

    const setAsCover = async (link) => {
        try {
            const data = {
                link,
                user: User.user._id
            }
            dispatch(changeImageChannell(data))
        } catch (err) {
            console.log(err)
        }
    }

    const copyLink = (url) => {
        navigator.clipboard.writeText(url)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 3000);
    }

    const deletePic = id => {
        dispatch(deleteImage(id))
    }

    return (
        <div className="cart-gallery" >
            <MyImage url={url} name={name} />
            {
                cover
                    ?
                    <p onClick={() => setAsCover(url)}>
                        {Load.sendData ? "در حال تغییر" : "انتخاب کاور کانال"}
                    </p>
                    :
                    <p onClick={() => copyLink(url)}>
                        {copy ? "کپی شد !!! " : "کپی لینک "}
                    </p>
            }
            <div className="set-Cover" onClick={() => setCover(!cover)}>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div className="trash" onClick={() => deletePic(id)}>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default GalleryChannell