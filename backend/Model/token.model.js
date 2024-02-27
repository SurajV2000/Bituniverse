const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    img: { type: String, require: true },
    tokenName: { type: String, require: true },
    symbol: { type: String, require: true },
    decimals: { type: Number, require: true },
    marketcap: { type: Number, require: true },
    chain: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = {
  TokenModel,
};
