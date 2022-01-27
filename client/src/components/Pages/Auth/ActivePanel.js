import { useDispatch , useSelector } from "react-redux";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { activeAcc } from "../../../redux/actions/authAction";


const activePanelForm = Yup.object().shape({
    mobile: Yup.string().required('وارد کردن این فیلد ضروری است'),
    code: Yup.string().required('وارد کردن این فیلد ضروری است')
});


const ActivePanel = ({ setActive }) => {

    const dispatch = useDispatch();
    const { Alert } = useSelector(state => state);

    return (
        <Formik
            initialValues={{
                mobile: '',
                code: '',
            }}
            validationSchema={activePanelForm}
            onSubmit={data => {
                console.log(data);
                dispatch(activeAcc(data))
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="mobile" type="mobile" placeholder="شماره تماس *" />
                    {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                    <Field name="code" placeholder="کد ارسال شده *" />
                    {errors.code && touched.code ? (
                        <div>{errors.code}</div>
                    ) : null}
                    <button type="submit">
                        {Alert.load ? "در حال فعال سازی" : "ارسال کن !!"}
                    </button>
                    <p onClick={() => { setActive(false) }}>شماره تماس من فعال شده &#128526; </p>
                </Form>
            )}
        </Formik>
    );
};

export default ActivePanel;
