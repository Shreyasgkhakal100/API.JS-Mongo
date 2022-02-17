const express = require('express');

const getUser = require("../models/user.model.js");

const router = express.Router();

let User;

router.get("/users", async (req, res)=>{
    try{
        const users = await User.find();
        res.send(users);
    }catch(err){
        res.send(err);
    }
})

module.exports = (userFieldsArray)=>{
    User = getUser(userFieldsArray);
    return router;
}