
const crypto = require("crypto");
const Razorpay = require("razorpay");


const getRazorpay = () =>
  new Razorpay({
    key_id: "process.env.RAZORPAY_KEY_ID",
    key_secret:"process.env.RAZORPAY_SECRET",
  });

//   console.log("process.env.RAZORPAY_KEY_ID",process.env.RAZORPAY_KEY_ID)
//   console.log("process.env.RAZORPAY_SECRET",process.env.RAZORPAY_SECRET)
//   console.log("process.env.PORT",process.env.PORT)
//   console.log("process.env.DB_URL",process.env.DB_URL)

exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const razorpay = getRazorpay();

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(sign)
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    res.status(200).json({ success: true, message: "Payment verified" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};