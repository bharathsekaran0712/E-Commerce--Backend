const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")
dotenv.config({path: path.join(__dirname,'config','config.env')})

app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"]
    })
)


const app = require("./app")
const connectDB = require("./config/db")




connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to PORT ${process.env.PORT}`)
})
// console.log("process.env.PORT",process.env.PORT)
