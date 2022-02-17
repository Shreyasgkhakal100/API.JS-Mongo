const express = require("express");

const getUser = require("../models/user.model.js");

const router = express.Router();

let User;

router.get("", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = (userFieldsArray, enableAndRestrict) => {
  User = getUser(userFieldsArray, enableAndRestrict);
  return router;
};
