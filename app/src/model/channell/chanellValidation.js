const yup = require('yup');



exports.channellValidation = yup.object().shape({
    name: yup.string().required("وارد کردن  عنوان الزامی است")
        .max(250, "نام کانال نباید بیشتر از 250 کاراکتر باشد"),
    shortDesc: yup.string().required("وارد کردن  توضیحات کوتاه الزامی است")
        .max(500, "توضیحات کوتاه نباید بیشتر از 500 کاراکتر باشد"),
    desc: yup.string().required("وارد کردن  توضیحات  الزامی است")
        .max(1000, "توضیحات  نباید بیشتر از 1000 کاراکتر باشد"),
    linkAparat: yup.string().required("وارد کردن لینک الزامی است")
    .matches("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?", "لینک شما اشتباه وارد شده است"),
});