const mongoose = require("mongoose");

// Define the schema for blacklisted tokens
const blacklistTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 }, // 86400 seconds = 24 hours
});

// Create the model from the schema
module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
