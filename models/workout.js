const mongoose = require("mongoose")

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    dayName: {
        type: String
    },
        day: {
            type: Date
        },
        exercises: [
            {
                type: {type: String},
                name: {type: String},
                duration: {type: String},
                weight: {type: String},
                reps: {type: String},
                sets: {type: String},
                // Validation to ensure number here?
                distance: {type: String}
              }
            ]

})
module.exports = workoutSchema;