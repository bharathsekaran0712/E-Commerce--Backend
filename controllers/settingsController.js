const Settings = require("../models/settingsModel")

// Get Settings
exports.getSettings = async (req, res) => {
  try {

    let settings = await Settings.findOne()

    // Create default settings if not exists
    if (!settings) {
      settings = await Settings.create({})
    }

    res.status(200).json({
      success: true,
      settings
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Save / Update Settings
exports.updateSettings = async (req, res) => {
  try {

    const {
      storeName,
      storeLogo,
      storeEmail,
      storePhone,
      storeAddress,
      currency,
      timeZone,
      language
    } = req.body

    let settings = await Settings.findOne()

    if (!settings) {

      settings = await Settings.create({
        storeName,
        storeLogo,
        storeEmail,
        storePhone,
        storeAddress,
        currency,
        timeZone,
        language
      })

    } else {

      settings.storeName = storeName
      settings.storeLogo = storeLogo
      settings.storeEmail = storeEmail
      settings.storePhone = storePhone
      settings.storeAddress = storeAddress
      settings.currency = currency
      settings.timeZone = timeZone
      settings.language = language

      await settings.save()
    }

    res.status(200).json({
      success: true,
      message: "Settings Updated Successfully",
      settings
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}