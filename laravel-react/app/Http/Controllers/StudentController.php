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
    public function store(Request $request){
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

    public function update($id , Request $request){
        
        $request->validate([
            'name' => 'sometimes|required|max:255',
            'age' => 'sometimes|required|integer',
            'gender' => 'sometimes|required|string',
        ]);
        $Student = Student::findOrFail($id);
        if(!$Student){
            return response()->json([
                'message' => 'Student not found'
            ], 404);
        }
        $Student->update($request->all());
        return response()->json([
            'message' => 'Student updated successfully',
            'student' => $Student
        ]);
    }

    public function destroy($id){
        $student = Student::findOrFail($id);
        $student->delete();
        return response()->json([
            'message' => 'Student deleted successfully'
        ]);
    }
}
