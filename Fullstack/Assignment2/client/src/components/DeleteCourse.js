import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { getCourse, deleteCourse } from '../api/api'

function DeleteCourse(){
    const [course, setCourse] = useState(null)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
        const fetchCourse = async ()=>{
            const response = await getCourse(params.id)

            setCourse(response.data)
        }

        fetchCourse()
    })


    if( course == null ) return "No Courses"

    return(
        <div>
            <h1>Are you sure you want to delete the following course?</h1>
            <h2>Name: {course.name}</h2>
            <h2>Description: {course.description}</h2>

            <button onClick={()=> navigate('/')}>No</button>
            <button onClick={async ()=> { await deleteCourse(course._id); navigate('/') }}>Yes! I want to delete this</button>

        </div>
    )
}

export default DeleteCourse