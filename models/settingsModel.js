const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      default: "ShoppingHub"
    },

    storeLogo: {
      type: String,
      default: ""
    },

    storeEmail: {
      type: String,
      default: ""
    },

    storePhone: {
      type: String,
      default: ""
    },

    storeAddress: {
      type: String,
      default: ""
    },

    currency: {
      type: String,
      default: "INR"
    },

    timeZone: {
      type: String,
      default: "Asia/Kolkata"
    },

    language: {
      type: String,
      default: "English"
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Settings", settingsSchema)