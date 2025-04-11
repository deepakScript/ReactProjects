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
}
