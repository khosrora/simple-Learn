import { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../../redux/actions/courseAction';

const initial = {
    image: '',
    title: '',
    shortDesc: '',
    content: '',
    user: '',
}

const CreateCourse = () => {
    const editor = useRef(null)
    const [course, setCourse] = useState(initial);
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const { User } = useSelector(state => state)

    const onChangeInput = e => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value })
    }

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            course.content = content;
            course.user = User.user._id;
            await dispatch(createCourse(course));
            setCourse(initial)
            setContent('')
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="container">
            <div className="box-overflow">
                <form>
                    <div className="form-group">
                        <p>عکس :</p>
                        <input className="form-input" name='image' type="text" value={course.image} onChange={onChangeInput} placeholder="عنوان آموزش" />
                    </div>
                    <div className="form-group">
                        <p>عنوان آموزش :</p>
                        <input className="form-input" name='title' type="text" value={course.title} onChange={onChangeInput} placeholder="عنوان آموزش" />
                    </div>
                    <div className="form-group">
                        <p>توضیحات کوتاه :</p>
                        <textarea className="form-input" name='shortDesc' type="text" value={course.shortDesc} onChange={onChangeInput} placeholder="عنوان آموزش" />
                    </div>
                    <div className="form-group">
                        <p>متن آموزش :</p>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => { }}
                        />
                    </div>

                    <button type='submit' className='btn-white' onClick={handleSubmit}>ارسال آموزش جدید</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
