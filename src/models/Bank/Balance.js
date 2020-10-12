const { SchemaType } = require("../../database");
const mongoose = require("../../database");

const BalanceSchema = new mongoose.Schema({
    createdAt: {
      type: Number
    },
    updatedAt: {
      type: Number
    },
    user: {
      type: mongoose.Schema.Types.ObjectId
    },
    amount: {
      type: mongoose.Schema.Types.Decimal128
    }
  },{
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

  const Balance = mongoose.model('Balance', BalanceSchema);
  
  module.exports = Balance;