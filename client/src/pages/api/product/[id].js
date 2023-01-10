import products from "../../../../db.json";

const getProduct = (req, res) => {

    // -- check if id exist in query from client -- //
    if (!req.query.id) {
        return res.status(400).json({ error: 'id is not defined' });
    }
    // -- now let's get the id and try to find product in collection -- //
    const { id } = req.query;
    const product = products.find(item => item.id == id)
    // -- check if product exist in collection -- //
    if (!product) {
        return res.status(404).json({ error: 'product is not found' });
    }
    // -- finally if everything is ok, return the product -- //
    return res.status(200).json(product)
}
export default getProduct