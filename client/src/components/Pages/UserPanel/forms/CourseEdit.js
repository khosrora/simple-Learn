import { useState, useRef } from 'react'
import JoditEditor from "jodit-react";
import { useSelector, useDispatch } from 'react-redux';
import { editCourse } from './../../../../redux/actions/courseAction';


const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
}

const CourseEdit = ({ setEdit, onEdit }) => {
    const initial = {
        _id: onEdit._id,
        image: onEdit.image,
        title: onEdit.title,
        url: onEdit.url,
        shortDesc: onEdit.shortDesc,
        content: onEdit.content,
        channell: onEdit.channell,
        category: onEdit.category,
        createdAt: onEdit.createdAt,
        permission: onEdit.permission,
        updatedAt: onEdit.updatedAt,
        view: onEdit.view,
    }
    const editor = useRef(null)

    const [course, setCourse] = useState(initial);
    const [content, setContent] = useState(onEdit.content)

    const { Categories } = useSelector(state => state)

    const onChangeInput = e => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value })
    }

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            course.content = content;
            dispatch(editCourse(course));
            setEdit(false)
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='editCourse'>
            <div className="box-editCourse">
                <div className="title">
                    <h4>ویرایش {onEdit.title}</h4>
                    <div onClick={() => setEdit(false)}>
                        <i className='fas fa-times'></i>
                    </div>
                </div>
                <hr />
                <div>
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
                            <p>لینک آموزش :</p>
                            <input className="form-input" name='url' type="text" value={course.url} onChange={onChangeInput} placeholder="لینک آموزش" />
                        </div>
                        <div className="form-group">
                            <p>توضیحات کوتاه :</p>
                            <textarea className="form-input" name='shortDesc' type="text" value={course.shortDesc} onChange={onChangeInput} placeholder="عنوان آموزش" />
                        </div>
                        <div className="form-group">
                            <select className="form-input" name='category' value={course.category} onChange={onChangeInput} placeholder="دسته بندی">
                                <option value="">لطفا یک دسته بندی را انتخاب کنید</option>
                                {
                                    Categories.categories.map(i => {
                                        if (i.parent === null)
                                            return <option key={i._id} value={i._id}>{i.name}</option>
                                    })
                                }
                            </select>
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

                        <button type='submit' className='btn-white' onClick={handleSubmit}>ویرایش {onEdit.title}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CourseEdit