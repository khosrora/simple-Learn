const yup = require('yup');



exports.galleryValidation = yup.object().shape({
    name: yup.string().required("وارد کردن عنوان الزامی است"),
    fileName: yup.string().required("وارد کردن عنوان الزامی است"),
    image: yup.string().required("وارد کردن لینک عکس الزامی است")
        .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
    thumb: yup.string().required("لطفا دوباره سعی کنید")
        .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
});