const router = require('express').Router()
let Car = require('../models/Car')

//GET all or by Id - this is industry standard follwing the REST conventions
router.get('/:id?', (req, res, next) => {
    if (!req.params.id) {
        //Find ALL
        Car.find({})
            .then(cars => {
                return res.send(cars)
            })
    }else{

        //Find by Id
        Car.findById(req.params.id)
        .then(car => {
            res.send(car)
        })
    }
})

router.post('/', (req, res, next) => {
    let newCar = req.body
    Car.create(newCar)
        .then(car => {
            res.send(car)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.put('/:id', (req, res, next) => {
    Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    .then(newCar => {
        res.send(newCar)
    })
})

router.delete('/:id', (req, res, next) => {
    Car.findByIdAndRemove(req.params.id)
        .then(oldDeletedCar => {
            res.send("Successfully Deleted")
        })
})

module.exports = router