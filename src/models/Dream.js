const mongoose = require("../database");

const DreamSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    deadline: {
      type: String,
    },
    done: {
      type: Boolean,
    },
    createdAt: {
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  }
);

const Dream = mongoose.model("Dream", DreamSchema);

module.exports = Dream;
