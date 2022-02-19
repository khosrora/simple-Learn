const Channell = require('../../model/channell/Channell');


const publicControllerAPI = {

    // ? method ===> GET
    // ? desc ===> public apis
    getPublics: async (req, res) => {
        try {
            // ! get items
            const channels = await Channell.find({ permission: true });
            return res.status(200).json({
                channels
            })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },

}


module.exports = publicControllerAPI;