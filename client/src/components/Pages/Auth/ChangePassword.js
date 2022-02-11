import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { changePassword } from "../../../redux/actions/authAction";

const changePasswordValidation = Yup.object().shape({
    mobile: Yup.string().required('وارد کردن این فیلد ضروری است'),
    newPassword: Yup.string().required('وارد کردن این فیلد ضروری است'),
    code: Yup.number().required('وارد کردن این فیلد ضروری است'),
});

const ChangePassword = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { Load } = useSelector(state => state);

    return (
        <div className="">
            <Formik
                initialValues={{
                    mobile: '',
                    newPassword: '',
                    code: ''
                }}
                validationSchema={changePasswordValidation}
                onSubmit={data => {
                    dispatch(changePassword(data));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="mobile" type="mobile" placeholder="شماره تماس *" />
                        {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                        <Field name="code" placeholder="کد دریافتی *" />
                        {errors.code && touched.code ? (
                            <div>{errors.code}</div>
                        ) : null}
                        <Field name="newPassword" placeholder="کلمه عبور جدید *" />
                        {errors.newPassword && touched.newPassword ? (
                            <div>{errors.newPassword}</div>
                        ) : null}
                        <button type="submit">
                            {Load.wait ? "در حال تغییر" : "تغییر بده"}
                        </button>
                        <p onClick={() => { history.push("/auth") }}>برو به صفحه ورود &#128580;</p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ChangePassword;

