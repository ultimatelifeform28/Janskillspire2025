import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllCourses, addCourse } from '../api/api'

function CourseList(){
    const [courses, setCourses] = useState(null)

    useEffect(()=>{
        const fetchCourse = async ()=>{
            const response = await getAllCourses()

            console.log(response.data)
            setCourses(response.data)
        }

        fetchCourse()
    })


    const handleSubmit = async (e) =>{
        e.preventDefault()

        let name = e.target['name'].value
        let description = e.target['description'].value

        await addCourse({name:name, description:description})
    }

    if( courses == null ) return "No Courses"

    return(
        <div>
            <h1>Add a new course:</h1>
            <form onSubmit ={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" />

                <label>Description:</label>
                <input type="text" name="description" />

                <button type="submit">Add</button>
            </form>

            <h1>Courses</h1>

            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Date Added</th>
                    <th>Actions</th>
                </tr>

                {
                    courses.map(course =>(
                        <tr>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td><Link to={`/delete/${course._id}`}>Remove</Link></td>
                        </tr>
                    ))
                } 
            </table>
        </div>
    )


}

export default CourseList