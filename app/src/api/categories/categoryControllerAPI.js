const Category = require('../../model/category/Category');


const userControllerAPI = {

    // ? method ===> GET
    // ? desc ===> get all categories 
    getAllCategories: async (req, res) => {
        try {
            // ! get all categories
            const categories = await Category.find();
            // ! send categories to client
            return res.status(200).json({
                categories
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "30d" })
}


module.exports = userControllerAPI;