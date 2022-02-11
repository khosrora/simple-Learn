// import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import TypeText from './../../utilities/TypeText';
import { register } from "../../../redux/actions/authAction"

const SignupSchema = Yup.object().shape({
    fullname: Yup.string().required('وارد کردن این فیلد ضروری است'),
    email: Yup.string().email('پست الکترونیک خود را درست وارد کنید').required('وارد کردن این فیلد ضروری است'),
    mobile: Yup.string().required('وارد کردن این فیلد ضروری است'),
    password: Yup.string().required('وارد کردن این فیلد ضروری است')
});

const Register = ({ setPage }) => {

    const dispatch = useDispatch();
    const { Load } = useSelector(state => state);

    return (
        <div className='box-form'>
            <p>آسان <TypeText text="یاد بگیر !!!" /></p>
            <h1>فرم ثبت نام</h1>
            <Formik
                initialValues={{
                    fullname: '',
                    mobile: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={data => {
                    dispatch(register(data))
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="fullname" type="fullname" placeholder="نام کاربری *" />
                        {errors.fullname && touched.fullname ? <div>{errors.fullname}</div> : null}
                        <Field name="mobile" type="mobile" placeholder="شماره تماس *" />
                        {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                        <Field name="email" type="email" placeholder="پست الکترونیک *" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="password" placeholder="کلمه عبور *" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <button type="submit">
                            {Load.wait ? "در حال ارسال" : " ثبت نام"}
                        </button>
                        <p onClick={() => { setPage(true) }}>من قبلا ثبت نام کردم که ! &#128533;</p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
