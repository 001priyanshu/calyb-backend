const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const campaignSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
    },
    ageRange: {
        type: String,
    },
    status: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("campaign", campaignSchema);