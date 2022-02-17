const mongoose = require('mongoose');

const userSchema = (fieldsArr)=>{
    let obj = {};
    fieldsArr.forEach((field)=>{
        obj[field] = {
            type: String,
            required: true
        }
    })
    return new mongoose.Schema(obj);
}

module.exports = (fieldsArray)=>{
    return mongoose.model("user", userSchema(fieldsArray));
}