const mongoose = require("mongoose")
const Schema = mongoose.Schema
const opts = { toJSON: { virtuals: true } };
const WorkoutSchema = new Schema(
    {
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
                duration: {type: Number},
                weight: {type: Number},
                reps: {type: Number},
                sets: {type: Number},
                distance: {type: Number}
              }
            ],
}
)

WorkoutSchema.virtual('combinedWeight').get(function () {
    return this.weight*this.reps*this.sets
})
const workout = mongoose.model("Workout", WorkoutSchema)
module.exports = workout;