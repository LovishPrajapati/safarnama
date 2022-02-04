const express = require("express")
const router = express.Router();

const { add, getAllBookings } = require('../controllers/bookingController')
const { protect, admin } = require("../controllers/authControllers");

router.route('').get(protect,admin,getAllBookings);
router.route('/add').post(protect,add)

module.exports = router;
