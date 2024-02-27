const express = require("express");
const { TokenModel } = require("../Model/token.model");
const tokenRouter = express.Router();
tokenRouter.post("/add", async (req, res) => {
  try {
    const token = new TokenModel(req.body);
    await token.save();
    res.status(200).send({ msg: "Created token" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

tokenRouter.get("/", async (req, res) => {
  try {
    const tokens = await TokenModel.find();
    res.status(200).send(tokens);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { tokenRouter };
