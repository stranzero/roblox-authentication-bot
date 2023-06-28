const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    // name, type, required, default
    robloxID: { type: String, required: false, default: null },
    discordID: { type: String, required: false, default: null },
    verified: { type: Boolean, required: false, default: false },
    statecode: { type: String, required: false, default: null },
    robloxUsername: { type: String, required: false, default: null },
});

module.exports = mongoose.model("schema", schema);