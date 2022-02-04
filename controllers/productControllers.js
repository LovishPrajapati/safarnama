const Product = require('../models/Product')

const addProduct = async (req, res) => {
    const {title,description,price,imageURL } = req.body;
    const productRes = new Product({ title, description, price, imageURL })
    if (!productRes) {
        res.status(409).json({
            success:false,
            error: "Something went wrong"
        })
    }
    await productRes.save()
    res.status(201).json({
        success: true,
        message: "Created Successfully",
        data:productRes
    })
}

const getAllProduct = async (req, res, next) => {
    const queries = await Product.find({})
    res.status(200).json({
        success: true,
        message: 'Data sent',
        data:queries
    })
}

module.exports = {getAllProduct,addProduct}