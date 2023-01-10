import products from "../../../../db.json";

const getProduct = (req, res) => {
    const { id } = req.query;
    const product = products.find(item => item.id == id)
    return res.json(product)
}
export default getProduct