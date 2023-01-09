const Router = require('express')
const product = require("./product");

const router = new Router()

router.use('/product', product)

module.exports = router