'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', function (req, res, next){
    Campus.findAll({ where: req.query })
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.param('campusId', function(req, res, next, id){
    Campus.scope('defaultScope').findById(id)
    .then(campus => {
        if(!campus) {
            const err = Error('Campus not found');
            err.status = 404;
            throw err
        }
        req.campus = campus
        next();
        return null; // in order to silence bluebird warning about promises inside of next
    })
    .catch(next);
});

router.get('/:campusId', function(req, res){
    res.json(req.campus);
});

router.get('/:campusId/students', function(req,res,next){
    req.campus.getStudents()
    .then(students => res.json(students))
    .catch(next);
})

router.post('/', function(req, res, next){
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

router.put('/:campusId', function(req, res, next){
    var campusInst = req.campus
    campusInst.update(req.body)
    .catch(next);
});

router.delete('/:campusId', function(req, res, next){
    req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next);
    
}

);

