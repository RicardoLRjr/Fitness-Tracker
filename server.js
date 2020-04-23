// Boilerplate/template from restaurant application
const express = require("express");
const mongoose = require("mongoose");
const db = require("./models/workout")
const PORT = process.env.PORT || 3000;
var path = require("path");
const app = express();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send("test")
  })
  app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, "public/exercise.html"));
  })
  app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "public/stats.html"));
  })


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});