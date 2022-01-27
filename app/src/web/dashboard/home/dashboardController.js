



const dashboardController = {
    // ? Method ==> GET
    // ? Desc ==>  admin panel page
    getHomePage: async (req, res) => {
        try {
            if (!req.user) {
                return res.redirect("/admin/login")
            }

            res.render("pages/home", {
                title: "پنل مدیریت || صفحه اول",
                bread: "داشبورد مدیریت",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
            })
        } catch (err) {
            console.log(err.message);
        }
    }

}


module.exports = dashboardController;