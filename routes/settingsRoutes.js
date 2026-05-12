const express = require("express")

const {
  getSettings,
  updateSettings
} = require("../controllers/settingsController")

const router = express.Router()

// Get settings
router.get("/settings", getSettings)

// Update settings
router.post("/settings/update", updateSettings)

module.exports = router