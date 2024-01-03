const mongoose = require("mongoose");

const tagsSchema = mongoose.Schema({
  tags: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
});

const Tags = mongoose.model("Tags", tagsSchema);

module.exports = Tags;
