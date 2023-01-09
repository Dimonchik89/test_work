const Router = require('express')
const { getAllProduct, getProduct } = require("../controllers/product");

const router = new Router()

router.get('/', getAllProduct)
router.get('/:id', getProduct)

module.exports = router