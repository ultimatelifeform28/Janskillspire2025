const express = require('express')
const router = express.Router()
const { } = require('../controllers/controllers.js')

const { getAllAppointments, getAppointment, addAppointment, deleteAppointment } = require('../controllers/controllers.js')


router.get('/appointments', getAllAppointments)
router.get('/appointments/:id', getAppointment)
router.post('/appointments', addAppointment)
router.delete('/appointments/:id', deleteAppointment)


module.exports = router