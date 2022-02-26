const yup = require('yup');



exports.courseValidation = yup.object().shape({
    title: yup.string().required("وارد کردن عنوان الزامی است")
        .max(100, " عنوان نباید بیشتر از 100 کاراکتر باشد"),
    image: yup.string().required("وارد کردن سریال عکس الزامی است"),
    shortDesc: yup.string().required("وارد کردن  توضیحات کوتاه الزامی است")
        .max(250, "توضیحات  نباید بیشتر از 250 کاراکتر باشد"),
    content: yup.string().required("وارد کردن  توضیحات  الزامی است"),
});