function Students (){
    let students = [

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

    
    ]
    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    )



}

export default Students;