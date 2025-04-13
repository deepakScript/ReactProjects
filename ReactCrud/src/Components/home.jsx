import React, { useEffect, useState } from 'react'
import AddStudent from './AddStudent';
import { useForm } from 'react-hook-form';


const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
   
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Validation failed:', errorData);
                alert('Failed to add student. Check the console for more info.');
                return;
            }

            const result = await response.json();
            console.log('Student added:', result);
            alert('Student added successfully!');
            setIsOpen(false);
            reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong while adding the student.');
        }
    };

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
        }finally{
            alert('Student deleted successfully!');
            setLoading(false);
        }
    }

    const editStudent = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/students/${studentId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStudents((prevStudents) => prevStudents.map((student) => (student.id === studentId ? data : student)));
        } catch (error) {
            console.error('Error editing student:', error);
        }finally{
            alert('Student edited successfully!');
            setLoading(false);
        }
    }
    return (
        <div>

            <div className="p-6">
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
                            <h2 className="text-xl font-bold mb-4">Add Student</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="block mb-1 font-medium">Name</label>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>

                                {/* Age */}
                                <div>
                                    <label className="block mb-1 font-medium">Age</label>
                                    <input
                                        {...register('age', {
                                            required: 'Age is required',
                                            valueAsNumber: true,
                                            min: { value: 1, message: 'Age must be at least 1' },
                                        })}
                                        type="number"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block mb-1 font-medium">Gender</label>
                                    <select
                                        {...register('gender', { required: 'Gender is required' })}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>




            {loading ? <p>Loading...</p> : null}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Student
            </button>
            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <button onClick={() => handleDeleteStudent(student.id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}
export default Home
