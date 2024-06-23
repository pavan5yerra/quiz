const express = require('express');

const {handleGetAllUsers} = require('../controller/UserController');
const router = express.Router();

const userRoutes = (server) => {
    router.get('/',  (req,res) => handleGetAllUsers(req,res,server));
    return router;
};

module.exports = userRoutes;