const express = require('express');

const connect = require('./config/db');

const app = express();

const userController = require('./controllers/user.controller');

app.use(express.json());


createUserAPI = (route, userFieldsArray)=>{
    return app.use(route, userController(userFieldsArray));
}

const connectToMongoDB = (PORT, Link)=>{
    return app.listen(PORT, async (req, res)=>{
        try{
            await connect(Link);
            console.log(`Server is running on port ${PORT}`);
        }catch(err){

        }
    })
}

module.exports = {connectToMongoDB, createUserAPI};