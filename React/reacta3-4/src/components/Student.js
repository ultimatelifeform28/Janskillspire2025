import { useParams } from "react-router-dom";

 function Student() {
    const { id } = useParams();

    const students = [

        {
            id: 1,
            name: "John Doe",
        },

        {
            id: 2,
            name: "Jane Smith",
        },

        {
            id: 3,
            name: "Sam Brown",

        },

        {
            id: 4,
            name: "Emily Davis",
        },
    ];

    const student = students.find((student) => student.id === parseInt(id));

    return(
    <div>
        <h1> Student Details </h1>
            <div>
                <h2>{student.name}</h2>
                <p>ID: {student.id}</p>
            </div> 
            
    </div>
    )
}

export default Student;