const Channel = require('../../model/channel/Channel');


const channelControllerAPI = {
    requestChannel: async (req, res) => {
        try {
            // ! get items 
            const { name, shortDesc, desc, linkAparat, image, view, permission, user } = req.body;
            console.log(req.body);
            


        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}



module.exports = channelControllerAPI;