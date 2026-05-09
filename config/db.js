const mongoose  = require("mongoose")

const connectDB = ()=>{mongoose.connect(process.env.DB_URL)
.then((data)=>{
    console.log("Mongoose is connected with server: ", data.connection.host)
})
.catch((err)=>{
    console.log(err.message)
})
}
// console.log("process.env.DB_URL",process.env.DB_URL)

module.exports = connectDB  