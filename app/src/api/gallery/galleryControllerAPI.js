const Gallery = require('../../model/gallery/Gallery');
const fs = require('fs');

const appRoot = require('app-root-path');


const channelControllerAPI = {
    galleryCreate: async (req, res) => {
        try {
            // ! get items
            const { userId } = req.body;
            if (!req.files) return res.status(400).json({ message: "حداقل یک عکس انتخاب کنید" })
            // ! create gallery
            const images = await createGallery(req.files.images, userId);
            // ! response to client
            if (images) return res.status(200).json({ message: "گالری شما بروز شد" })
        } catch (err) {
            for (let i of req.files.images) {
                fs.unlinkSync(`${appRoot}/public/uploads/images/gallery/` + i.filename);
            }
            return res.status(500).json({ message: err.message })
        }
    },
    getAllImages: async (req, res) => {
        try {
            // ! get items
            const { userId } = req.body;
            // ! find galleries
            const userGallery = await Gallery.find({ user: userId });
            if (!userGallery) return res.status(400).json({ message: "زودتر گالریت رو پر از عکس کن !!" })
            // ! response to client
            return res.status(200).json({ userGallery })
        } catch (err) {
            for (let i of req.files.images) {
                fs.unlinkSync(`${appRoot}/public/uploads/images/gallery/` + i.filename);
            }
            return res.status(500).json({ message: err.message })
        }
    },
    deleteImage: async (req, res) => {
        try {
            // ! get items
            const { id } = req.body;
            // ! find galleries
            const imageGallery = await Gallery.findByIdAndDelete({ _id: id })
            if (!imageGallery) return res.status(400).json({ message: "عکس مورد نظر پیدا نشد !!" })
            fs.unlinkSync(`${appRoot}/public/uploads/images/gallery/` + imageGallery.fileName);
            // ! response to client
            return res.status(200).json({ message: "عکس مورد نظر حذف شد" })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },
}

const createGallery = async (images, id) => {
    try {
        for (let i of images) {
            await Gallery.create({
                user: id, name: i.originalname, fileName: i.filename, link: `${process.env.url}/uploads/images/gallery/${i.filename}`
            })
        }
        return true
    } catch (err) {
        for (let i of images) {
            fs.unlinkSync(`${appRoot}/public/uploads/images/gallery/` + i.filename);
        }
        return false
    }
}

module.exports = channelControllerAPI;