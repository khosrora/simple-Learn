const Channel = require('../../../model/channel/Channel');
const { jalaliMoment } = require('../../../../utilities/helpers/jalali');


const channellController = {

    // ? Method ==> GET
    // ? Desc ==>  get all channells
    getAllChannells: async (req, res) => {
        try {
            const channells = await Channel.find().populate("user");
            res.render("pages/channells/channells.ejs", {
                title: "پنل مدیریت || کانال ها",
                bread: "کانال ها",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                channells
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  set permission channells
    setPermissionChannell: async (req, res) => {
        try {
            // ! get params
            const id = req.params.id;
            // ! find channell
            const channell = await Channel.findById(id);
            if (!channell) {
                req.flash("error", "کانال مورد نظر پیدا نشد")
                res.redirect("/admin/allChannells")
            }
            // ! set permission or not
            if (channell.permission) {
                channell.permission = false;
                await channell.save();
                req.flash("error", "کانال مورد نظر غیر فعال شد")
                res.redirect("/admin/allChannells")
            } else {
                channell.permission = true;
                await channell.save();
                req.flash("success", "کانال مورد نظر  فعال شد")
                res.redirect("/admin/allChannells")
            }

        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  detail channell
    detailChannell: async (req, res) => {
        try {
            // ! get params
            const id = req.params.id;
            // ! find channell
            const channell = await Channel.findById(id).populate("user");
            if (!channell) {
                req.flash("error", "کانال مورد نظر پیدا نشد")
                res.redirect("/admin/allChannells")
            }
            res.render("pages/channells/channell.ejs", {
                title: "پنل مدیریت || جزئیات کانال",
                bread: "جزئیات کانال",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                jalaliMoment,
                channell,
            })
        } catch (err) {
            console.log(err.message);
        }
    },
}


module.exports = channellController;