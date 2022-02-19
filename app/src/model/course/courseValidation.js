const yup = require('yup');



exports.courseValidation = yup.object().shape({
    title: yup.string().required("وارد کردن عنوان الزامی است")
        .max(100, " عنوان نباید بیشتر از 100 کاراکتر باشد"),
    image: yup.string().required("وارد کردن لینک عکس الزامی است")
        .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
    url: yup.string().required("وارد کردن لینک آموزش الزامی است")
        .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
    shortDesc: yup.string().required("وارد کردن  توضیحات کوتاه الزامی است")
        .max(250, "توضیحات  نباید بیشتر از 250 کاراکتر باشد"),
    content: yup.string().required("وارد کردن  توضیحات  الزامی است"),
});