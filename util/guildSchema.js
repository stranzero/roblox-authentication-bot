const mongoose = require("mongoose");

const guilds = new mongoose.Schema({
    guildID: { type: String, required: false, default: null },
    verify: { type: Boolean, required: false, default: true },
    groupID: { type: String, required: false, default: null },

});

module.exports = mongoose.model("guilds", guilds);
