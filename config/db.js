const mongoose = require("mongoose")

const connectDB = async () => {

  try {

    const data = await mongoose.connect(process.env.DB_URL)

    console.log(
      "Mongoose is connected with server:",
      data.connection.host
    )

  } catch (err) {

    console.log(err.message)
    process.exit(1)

  }
}

module.exports = connectDB