const router = require("express").Router();

const Workout = require("../models/workout.js");

router.get("/api/workouts",function(req,res){
    Workout.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});


router.post("/api/workouts",function (req,res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});

router.get("/api/workouts/range",function(req,res){
    Workout.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});


router.post("/api/workouts/range",function (req,res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id",({body,params},res)=>{
    Workout.findById(
     params.id,
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});


module.exports = router;