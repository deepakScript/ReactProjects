import React, { useEffect, useState } from 'react'

const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/students');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchStudents();
    }, []);

    const handleAddStudent = async (newStudent) => {
        try{
            const response = await fetch('http://localhost:8000/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });
            if(response.ok){
                const addedStudent = await response.json();
                setStudents((prevStudents) => [...prevStudents, addedStudent]);
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }catch (error) {
            console.error('Error adding student:', error);
        }
        finally {
            setLoading(false);
            setModelOpen(false);
            setNewStudent({name:'', age:'', gender:''});
        }
    };


    const handleDeleteStudent = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/students/${studentId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
        } catch (error) {
            console.error('Error deleting student:', error);
        }   
    }
return (
        <div>
            {loading ? <p>Loading...</p> : null}
            <h1>Student List</h1>
            <button onClick={() => setModelOpen(true)}>Add Student</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}
export default Home
