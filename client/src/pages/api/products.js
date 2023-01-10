import products from "../../../db.json";

const getAllProduct = (req, res) => {
    return res.status(200).json(products)
}

export default getAllProduct;