const dotenv = require("dotenv")
const path = require("path")

dotenv.config({
  path: path.join(__dirname, "config", "config.env"),
})

const app = require("./app")
const connectDB = require("./config/db")

const startServer = async () => {
  try {

    await connectDB()

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening to PORT ${process.env.PORT}`)
    })

  } catch (error) {

    console.log(error)

  }
}

startServer()