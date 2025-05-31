const Course = require('../models/course');

const getAllCourses = async (request, response) =>{
    let course = await Course.find();

    response.json(courses)
}

const addCourse = async (request, response) => {
    let newCourse = new Course(request.body);

    newCourse.save()
    .then(( course) => {
        response.end(course)
    })
    .catch((error) => {
        response.status(500).json({ message: error.message });
    });

}

module.exports = {
    addCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
}