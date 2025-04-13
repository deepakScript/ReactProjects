import React, { useEffect } from 'react'

const home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try{
                const response = await fetch('https://localhost:8000/api/students');
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudents(data);
            }catch(error) {
                console.error('Error fetching students:', error);
            }finally {
                setLoading(false);
            }
        }
        fetchStudents();
    }, [])
    if(loading) {
        return <div>Loading...</div>;
    }
    return (
       <div>
        <h1>Student List</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
    )
}

export default home
