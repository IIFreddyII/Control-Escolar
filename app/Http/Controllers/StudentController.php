<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Models\User;

class StudentController extends Controller
{
    
    public function index()
    {
        $students = Student::all();
        return $students;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'name' => 'required',
            'firstName' => '',
            'lastName' => 'required',
            'sex' => 'required',
            'curp' => 'required|max:18|unique:students,curp',
            'address' => 'required',
            'tel' => 'required|max:10|unique:students,tel',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $student = Student::create([
            'email' => $request->email,
            'name' => $request->name,
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'sex' => $request->sex,
            'curp' => $request->curp,
            'address' => $request->address,
            'tel' => $request->tel,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $student = Student::find($id);
        return $student;
    }

    
    public function edit(Student $student)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        /*validacion de los campos
        $validator = Validator::make($request->all(), [
            'idUser' => 'required',
            'name' => 'required',
            'firstName' => '',
            'lastName' => 'required',
            'sex' => 'required',
            'curp' => 'required|max:18|unique:students,curp',
            'address' => 'required',
            'tel' => 'required|max:10|unique:students,tel',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        */
        $student = Student::find($id);
        $student->email = $request->email;
        $student->name = $request->name;
        $student->firstName = $request->firstName;
        $student->lastName = $request->lastName;
        $student->sex = $request->sex;
        $student->curp = $request->curp;
        $student->address = $request->address;
        $student->tel = $request->tel;
        

        /**Actualizar la informacion */
        $student->save();
        return $student;
    }

    
    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();
        $student = Student::all();
        return $student;
    }
}
