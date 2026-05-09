const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const { createRazorpayOrder, verifyPayment } = require("../controllers/paymentController");

router.post("/payment/create-order", userMiddleware, createRazorpayOrder);
router.post("/payment/verify", userMiddleware, verifyPayment);

module.exports = router;