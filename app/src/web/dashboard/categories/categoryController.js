const Category = require('../../../model/category/Category');



const categoryController = {
    // ? Method ==> GET
    // ? Desc ==>  get all categories
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.render("pages/categories/allCategories", {
                title: "پنل مدیریت || دسته بندی ها",
                bread: "دسته بندی ها",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                categories
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> GET
    // ? Desc ==>  get createCategory page
    createCategoriesPage: async (req, res) => {
        try {
            const categories = await Category.find();
            res.render("pages/categories/createCategory", {
                title: "پنل مدیریت || ایجاد دسته بندی جدید",
                bread: "ایجاد دسته بندی جدید",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                categories
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> POST
    // ? Desc ==>   createCategory 
    createCategory: async (req, res) => {
        try {
            //! get items
            const { name, parent, desc } = req.body;
            let idParent;
            if (parent === "") {
                idParent = null
            } else {
                idParent = parent
            }
            // ! checked
            const oldCategory = await Category.findOne({ name });
            if (oldCategory) {
                req.flash("error", "این دسته بندی ثبت شده است")
                return res.redirect("/admin/createCategory")
            }
            // ! create new category
            await Category.create({
                name, parent: idParent, desc
            })
            // ! send message
            req.flash("success", "دسته بندی با موفقیت ثبت شد")
            return res.redirect("/admin/allCategories")
        } catch (err) {
            console.log(err.message);
            req.flash("error", err.message)
            return res.redirect("/admin/createCategories")
        }
    },
    // ? Method ==> get
    // ? Desc ==>   deleteCategroy 
    deleteCategroy: async (req, res) => {
        try {
            // ! find and delete
            await Category.findByIdAndDelete({ _id: req.params.id });
            // ! send message
            req.flash("success", "دسته بندی با موفقیت حذف شد");
            res.redirect("/admin/allCategories")
        } catch (err) {
            console.log(err.message);
            req.flash("error", err.message);
            res.redirect("/admin/allCategories")
        }
    },
    // ? Method ==> get
    // ? Desc ==>   edit Categroy Page 
    editCategroyPage: async (req, res) => {
        try {
            const categories = await Category.find();
            const category = await Category.findOne({ _id: req.params.id });
            res.render("pages/categories/editCategory", {
                title: "پنل مدیریت || ویرایش دسته بندی ",
                bread: "ویرایش دسته بندی ",
                message: req.flash("success"),
                error: req.flash("error"),
                user: req.user,
                category,
                categories
            })
        } catch (err) {
            console.log(err.message);
        }
    },
    // ? Method ==> post
    // ? Desc ==>   edit Categroy Page 
    editCategroy: async (req, res) => {
        try {
            // ! get items 
            const _id = req.params.id
            const category = await Category.find({ _id });
            //! get items
            const { name, parent, desc } = req.body;
            let idParent;
            if (parent === "") {
                idParent = null
            } else {
                idParent = parent
            }
            // ! create new category
            await Category.findByIdAndUpdate({ _id }, {
                name, parent: idParent, desc
            })
            // ! send message
            req.flash("success", "دسته بندی با موفقیت ویرایش شد")
            return res.redirect("/admin/allCategories")

        } catch (err) {
            console.log(err.message);
        }
    },
}


module.exports = categoryController;