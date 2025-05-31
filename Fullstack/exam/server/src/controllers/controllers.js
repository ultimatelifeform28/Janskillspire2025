const Appointment = require('../models/Appointments.js')

const getAllAppointments = async (req, res) => {
    try {
        let appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAppointment = async (req, res) => {
    try {
        let id = req.params.id;
        const appointment = await Appointment.findById(id);
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addAppointment = async (req, res) => {
    let newAppointment = new Appointment(req.body)

    console.log("Request new Appointment", req.body);

    newAppointment.save()
        .then((Appointment) => {
            res.status(200).json(Appointment)
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        })
}

const deleteAppointment = async (req, res) => {
    try {
        let id = req.params.id;
        const appointment = await Appointment.findByIdAndDelete(id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment canceled successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAppointments,
    getAppointment,
    addAppointment,
    deleteAppointment

}