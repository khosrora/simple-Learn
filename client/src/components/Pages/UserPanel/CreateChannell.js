import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { requestChannel } from '../../../redux/actions/channellAction';



const channellSchema = Yup.object().shape({
    name: Yup.string().required('وارد کردن این فیلد ضروری است'),
    shortDesc: Yup.string().required('وارد کردن این فیلد ضروری است')
        .max(500, "بیشتر از 500 کاراکتر نباشد"),
    desc: Yup.string().required('وارد کردن این فیلد ضروری است')
        .max(1000, "بیشتر از 1000 کاراکتر نباشد"),
    linkAparat: Yup.string().required('وارد کردن این فیلد ضروری است')
        .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
});

const CreateChannel = () => {

    const dispatch = useDispatch();

    const { User, Load } = useSelector(state => state)

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
                        <Formik
                            initialValues={{
                                name: '',
                                shortDesc: '',
                                desc: '',
                                linkAparat: '',
                                userId: User.user._id
                            }}
                            validationSchema={channellSchema}
                            onSubmit={data => {
                                dispatch(requestChannel(data))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='form-panel'>
                                    <p>نام  : </p>
                                    <Field className="form-input" name="name" type="name" placeholder="نام کانال *" />
                                    {errors.name && touched.name ? <div>{errors.name}</div> : null}
                                    <p>توضیحات کوتاه : </p>
                                    <Field className="form-input" component="textarea" rows="3" name="shortDesc" type="text" placeholder="نام کانال *" />
                                    {errors.shortDesc && touched.shortDesc ? <div>{errors.shortDesc}</div> : null}
                                    <p>توضیحات : </p>
                                    <Field className="form-input" component="textarea" rows="6" name="desc" type="text" placeholder="نام کانال *" />
                                    {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
                                    <p>لینک کانال  :  (آپارات / یوتیوب)</p>
                                    <Field className="form-input" name="linkAparat" type="text" placeholder="نام کانال *" />
                                    {errors.linkAparat && touched.linkAparat ? <div>{errors.linkAparat}</div> : null}
                                    <button type="submit">
                                        {Load.isSend ? "در حال ارسال اطلاعات" : "ارسال"}
                                    </button>

                                </Form>
                            )}
                        </Formik>
                }
            </div>
        </div>
    );
};

export default CreateChannel;
