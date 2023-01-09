const products = require("../db.json");

const getAllProduct = (req, res) => {
    const allProducts = products;
    return res.json(allProducts)
}

const getProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find(item => item.id == id)
    return res.json(product)
}


module.exports = {
    getAllProduct,
    getProduct
}