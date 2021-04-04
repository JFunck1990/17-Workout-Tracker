const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        type: {
            type: String,
            trim: true,
            required: "Cardio or Resistance"
        },

        name: {
            type: String,
            trim: true,
            required: "Name of the exersice"
        },

        duration: {
            type: Number
        },

        weight: {
            type: Number
        },

        reps: {
            type: Number
        },

        sets: {
            type: Number
        }

    }
    ]
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;