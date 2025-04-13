import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Await } from 'react-router-dom';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isedit, setIsedit] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // ✅ Add student
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
                alert('Failed to add student.');
                return;
            }

            const result = await response.json();
            setStudents((prev) => [...prev, result]);
            alert('Student added successfully!');
            setIsOpen(false);
            reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong while adding the student.');
        }
    };

    // ✅ Edit student
    const onEditSubmit = async (formData) => {
        try {
            const response = await fetch(`http://localhost:8000/api/students/${editingStudent.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) throw new Error('Failed to update student');
    
            const updatedStudent = await response.json();
    
            // 🔁 Update list in UI
            setStudents((prevStudents) =>
                prevStudents.map((student) =>
                    student.id === updatedStudent.id ? updatedStudent : student
                )
            );
    
            // ✅ Close modal and reset edit state
            setIsedit(false);
            setEditingStudent(null);
            alert('Student updated successfully!');
        } catch (error) {
            console.error('Error updating student:', error);
            alert('Could not update student.');
        }
    };
    


    // ✅ Delete student
    const handleDeleteStudent = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/students/${studentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Failed to delete');

            setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
            alert('Student deleted successfully!');
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('Failed to delete student.');
        }
    };

    // ✅ Fetch and preload student for editing
    const fetchStudentForEdit = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/students/${studentId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('Failed to fetch student');
    
            const data = await response.json();
            setEditingStudent(data); // set the student to be edited
            reset({
                name: data.name,
                age: data.age,
                gender: data.gender
            }); // preload form
            setIsedit(true); // open modal
        } catch (error) {
            console.error('Error fetching student:', error);
            alert('Could not load student for editing.');
        }
    };
    


    // ✅ Initial fetch
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/students');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="p-6 space-y-6">
            {/* 🔵 Add Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add Student</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <InputField register={register} errors={errors} />
                            <FormButtons onCancel={() => setIsOpen(false)} submitLabel="Submit" />
                        </form>
                    </div>
                </div>
            )}

            {/* 🟢 Edit Modal */}
            {isedit && editingStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Student</h2>
                        <form onSubmit={handleSubmit(onEditSubmit)} className="space-y-4">
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

                            {/* Buttons */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsedit(false);
                                        setEditingStudent(null);
                                    }}
                                    className="text-gray-600 hover:text-black"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



            {/* ➕ Add Button */}
            <button
                onClick={() => {
                    reset(); // Clear previous form values
                    setIsOpen(true);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Student
            </button>

            {/* 📋 Student Table */}
            <h1 className="text-2xl font-semibold">Student List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="w-full border mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Age</th>
                            <th className="p-2 border">Gender</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="p-2 border">{student.name}</td>
                                <td className="p-2 border">{student.age}</td>
                                <td className="p-2 border">{student.gender}</td>
                                <td className="p-2 border space-x-2">
                                    <button
                                        onClick={() => fetchStudentForEdit(student.id)}
                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteStudent(student.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

// ✅ Input Field Component (Reusable for Add/Edit)
const InputField = ({ register, errors }) => (
    <>
        <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

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
    </>
);

// ✅ Cancel/Submit Buttons
const FormButtons = ({ onCancel, submitLabel }) => (
    <div className="flex justify-between items-center mt-4">
        <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 hover:text-black"
        >
            Cancel
        </button>
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            {submitLabel}
        </button>
    </div>
);

export default Home;
