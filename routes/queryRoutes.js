const express = require("express")
const router = express.Router();
const {addQuery,getAllQueries} = require('../controllers/queryController')
const { protect, admin } = require("../controllers/authControllers");

router.route('/add').post(addQuery);

router.route('').get(protect, admin, getAllQueries)

module.exports = router;
