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
// HTML Routes:
app.get('/', function (req, res) {
  })
  app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, "public/exercise.html"));
  })
  app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "public/stats.html"));
  })


// API Routes:
// Worked with John Senak on these routes
app.get("/api/workouts", (req, res) => {
    db.find({})
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.json(err);
    });
});
app.post("/api/workouts", (req, res) => {
    db.create({});
    return (req.body);//
});
app.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(10)
    .then(workouts => {
        res.json(err);
    });
});
app.put("/api/workouts/:id", (req, res) => {
    db.findByIdAndUpdate(req.params.id, {
    }).then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.json(err);
    });
});
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});