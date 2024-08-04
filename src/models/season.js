const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  tvSeriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TVSeries",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Season", seasonSchema);
