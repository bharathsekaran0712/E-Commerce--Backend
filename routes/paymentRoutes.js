const express = require("express")
const userMiddleware = require("../middleware/userMiddleware")
const router = express.Router()

const {
  createOrder,
  verifyPayment
} = require("../controllers/paymentController")

router.post("/payment/create-order", userMiddleware, createRazorpayOrder);

router.post("/payment/verify", userMiddleware, verifyPayment);

module.exports = router