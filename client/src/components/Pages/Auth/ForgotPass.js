import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TypeText from './../../utilities/TypeText';
import { useHistory } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import { codeChangePassword } from './../../../redux/actions/authAction';


const forgotPassValidation = Yup.object().shape({
    mobile: Yup.string().required('وارد کردن این فیلد ضروری است')
});

const ForgotPass = () => {

    const [changePage, setChangePage] = useState(true);
    const { Load } = useSelector(state => state)
    const history = useHistory();

    const dispatch = useDispatch();


    return (
        <div className="auth-page">
            <div className="detail">
                <div>
                    <h1>خوش آمدید</h1>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    </p>
                    <button onClick={() => { history.push("/auth") }}>ورود</button>
                </div>
            </div>
            <div className="form">
                <div className="box-form">
                    <p>آسان  !!! <TypeText text="یاد بگیر !!!" /></p>
                    <h1>خوش برگشتی !</h1>
                    {
                        changePage
                            ?
                            <Formik
                                initialValues={{
                                    mobile: ''
                                }}
                                validationSchema={forgotPassValidation}
                                onSubmit={data => {
                                    dispatch(codeChangePassword(data))
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Field name="mobile" type="mobile" placeholder="ارسال کن *" />
                                        {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                                        <button type="submit">
                                            {Load.wait ? "در حال ارسال" : "ارسال"}
                                        </button>
                                        <p> <Link to="/auth">  برو به صفحه ورود &#128563;</Link></p>
                                        <p onClick={() => setChangePage(false)}>پیام رسید &#128563;</p>
                                    </Form>
                                )}
                            </Formik>
                            :
                            <ChangePassword />

                    }
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;