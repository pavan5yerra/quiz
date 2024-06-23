const express = require('express');

const {handleGetAllQuestions} = require('../controller/QuestionController');
const router = express.Router();

const questionRoutes = (server) => {
    router.get('/',  (req,res) => handleGetAllQuestions(req,res,server));
    return router;
};

module.exports = questionRoutes;