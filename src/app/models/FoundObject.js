const { Schema, model } = require("mongoose");

const FoundObjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageId: {
      type: String,
      unique: true,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("FoundObject", FoundObjectSchema);
