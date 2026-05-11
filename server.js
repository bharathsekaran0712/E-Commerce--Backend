const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// Routes
const product = require("./routes/productRoutes")
const user = require("./routes/userRoutes")
const cartRoutes = require("./routes/cartRoutes")
const order = require("./routes/orderRoutes")
const address = require("./routes/addressRoutes")
const paymentRoutes = require("./routes/paymentRoutes")

const app = express()

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
)

app.use(express.json())

// Routes
app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/", cartRoutes)
app.use("/api/v1", order)
app.use("/api/address", address)
app.use("/api/payment", paymentRoutes)

// MongoDB Connection + Server Start
const startServer = async () => {
  try {

    const data = await mongoose.connect("mongodb+srv://bharath:bharath123@clustor0.cxtmv2k.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce")

    console.log(
      "Mongoose is connected with server:",
      data.connection.host
    )

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is listening to PORT ${process.env.PORT || 8000}`
      )
    })

  } catch (err) {

    console.log(err.message)
    process.exit(1)

  }
}

startServer()