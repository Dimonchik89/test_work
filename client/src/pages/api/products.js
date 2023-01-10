import products from "../../../db.json";

const getAllProduct = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    const allProducts = products;
    return res.json(allProducts)
}

export default getAllProduct;