const express = require("express");

const connect = require("./config/db");

const app = express();

const userController = require("./controllers/user.controller");

app.use(express.json());

createUserAPI = (route, userFieldsArray, enableAndRestrict) => {
  app.use(`/${route}`, userController(userFieldsArray, enableAndRestrict));
};

const connectToMongoDB = (PORT, Link) => {
  app.listen(PORT, async (req, res) => {
    try {
      await connect(Link);
    } catch (err) {
      return console.log(errr.message);
    }
  });
  return console.log(`Server is running on port ${PORT}`);
};

module.exports = { connectToMongoDB, createUserAPI };
