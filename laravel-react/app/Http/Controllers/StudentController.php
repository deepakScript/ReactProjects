<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return response()->json($students);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'gender' => 'required|string',
        ]);

        $Student = Student::create($request->all());
        return response()->json([
            'message' => 'Student created successfully',
            'student' => $Student
        ], 201);
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'age' => 'sometimes|integer',
            'gender' => 'sometimes|string',
        ]);

        if ($student = Student::find($id)) {
            if($student->update($request->all())){
                return response()->json([
                    'message' => 'Student updated successfully',
                    'student' => $student
                ]);
            } else {
                return response()->json([
                    'message' => 'Failed to update student'
                ], 500);
            }

        } else {
            return response()->json([
                'message' => 'Student not found'
            ], 404);
        }

        
    }


    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();
        return response()->json([
            'message' => 'Student deleted successfully'
        ]);
    }
}
