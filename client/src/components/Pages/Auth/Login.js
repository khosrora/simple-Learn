import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TypeText from '../../utilities/TypeText';
import ActivePanel from "./ActivePanel";
import { login } from './../../../redux/actions/authAction';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('پست الکترونیک خود را درست وارد کنید').required('وارد کردن این فیلد ضروری است'),
    password: Yup.string().required('وارد کردن این فیلد ضروری است')
});

const Login = ({ setPage }) => {

    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const { Load } = useSelector(state => state);

    return (
        <div className='box-form'>
            <p>آسان  !!! <TypeText text="یاد بگیر !!!" /></p>
            <h1>خوش برگشتی !</h1>
            {

                active ?
                    <ActivePanel setActive={setActive} />
                    :
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={data => {
                            dispatch(login(data))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field name="email" type="email" placeholder="پست الکترونیک *" />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                <Field name="password" placeholder="کلمه عبور *" />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                                <button type="submit">
                                    {Load.wait ? "الان وارد میشی" : "ورود"}
                                </button>
                                <p onClick={() => { setPage(false) }}>من که هنوز ثبت نام نکردم &#128533;</p>
                                <p onClick={() => { setActive(true) }}> شماره تماس من فعال نشده است &#128527;</p>
                                <p> <Link to="/forgotPass">رمز عبورم رو فراموش کردم &#128557;</Link></p>
                            </Form>
                        )}
                    </Formik>
            }
        </div>
    );
};

export default Login;
