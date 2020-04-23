var express = require("express");
var db = require("../models");
var router = express.Router();
const app = express();

router.get('/', function (req, res) {
    res.send('Workout Page')
  })