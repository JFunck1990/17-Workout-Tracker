const mongoose = require("mongoose");

const Schema = mongoos.Schema;

const workoutSchema = new Schema({

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;