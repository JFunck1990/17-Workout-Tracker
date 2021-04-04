const mongoose = require("mongoose");

const Schema = mongoos.Schema;

const workoutSchema = new Schema({
    exercises: [
    {
        type: {
            type: String
        },

        name: {
            type: String
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