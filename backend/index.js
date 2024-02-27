const express = require("express");
const { connection } = require("./db");
const { tokenRouter } = require("./Route/token.route");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/token", tokenRouter);

app.listen(5050, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is runing at 5050");
});
