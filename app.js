const express = require("express")
const product = require("./routes/productRoutes")
const user =  require("./routes/userRoutes")
const cartRoutes = require("./routes/cartRoutes");
const order  = require("./routes/orderRoutes")
const address = require("./routes/addressRoutes")
const paymentRoutes = require("./routes/paymentRoutes")
const cors = require("cors")


const app = express()

app.use(
    cors({ origin: "*" , 
        methods: ["GET","POST","PUT","DELETE"]
    })
)


app.use(express.json())

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/", cartRoutes);
app.use("/api/v1",order)
app.use("/api/address",address)
app.use("/api/payment", paymentRoutes)




module.exports = app