const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  movieId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("Review", ReviewSchema);
