import { useState, useEffect } from 'react';
import { errorMessage } from '../../utilities/Toastify';
import { useDispatch, useSelector } from 'react-redux';
import { galleryCreate, getGalleries } from './../../../redux/actions/galleryAction';
import GalleryChannell from './GalleryChannell';
import UserPanellLoading from './../Loading/UserPanellLoading';

const CreateGallery = () => {

    const dispatch = useDispatch();

    const [file, setFile] = useState();
    const { User, gallery, Load } = useSelector(state => state)

    useEffect(() => {
        dispatch(getGalleries(User.user._id))
    }, [dispatch, User.user._id])

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (!file) return errorMessage("حداقل یک عکس انتخاب کن دوست من");

            let formData = new FormData();
            for (let i of file) {
                formData.append('images', i)
            }
            formData.append('userId', User.user._id);

            dispatch(galleryCreate(formData))
            setFile("")

        } catch (err) {
            errorMessage("متاسفانه مشکلی رخ داده است لطفا دوباره سعی کنید");
        }
    }

    return (
        <div className="container">
            <div className="box-overflow">
                <form className="form-panel" style={{ width: "70%" }} >
                    <p>عکس : </p>
                    <input type="file" className="form-input" name='file' multiple onChange={e => setFile(e.target.files)} />
                    <button type='submit' className='btn-white' onClick={handleSubmit}>ثبت عکس جدید</button>
                </form>
                <div className='gallery-parent'>
                    <div className="title-gallery">
                        <hr />
                        <p>عکس های اضافه شده : <span onClick={() => { dispatch(getGalleries(User.user._id)) }}><i className="fa-solid fa-arrows-rotate"></i></span></p>
                    </div>
                    <div className='gallery'>
                        {
                            Load.fetching ?
                                <UserPanellLoading />
                                :
                                gallery.allGallery ?
                                    gallery.allGallery.map(i => (
                                        <GalleryChannell key={i._id} id={i._id} url={i.image}  name={i.name} />
                                    ))
                                    :
                                    <div className="alert">
                                        <p>گالری شما خالی است</p>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateGallery