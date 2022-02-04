const express = require("express")
const router = express.Router();

const { addProduct, getAllProduct } = require('../controllers/productControllers')
const { protect, admin } = require("../controllers/authControllers");

router.route('').get(getAllProduct);
router.route('/add').post(protect,admin,addProduct)

module.exports = router;
