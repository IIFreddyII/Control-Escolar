<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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
            'nCtl' => 'required|max:3|unique:students,nCtl',
            'name' => 'required|max:20',
            'sexuality' => 'required|max:1',
            'address' => 'required|max:20',
            'age' => 'required|max:2',
            'nCar' => 'required|max:2',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $student = Student::create([
            'nCtl' => $request->nCtl,
            'name' => $request->name,
            'sexuality' => $request->sexuality,
            'address' => $request->address,
            'age' => $request->age,
            'nCar' => $request->nCar,
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

    public function update(Request $request, Student $student)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            //'nCtl' => 'required|max:3|unique:students,nCtl',
            'name' => 'required|max:20',
            'sexuality' => 'required|max:1',
            'address' => 'required|max:20',
            'age' => 'required|max:2',
            'nCar' => 'required|max:2',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $student = Student::find($request->id);
        //$student->nCtl = $request->nCtl;
        $student->name = $request->name;
        $student->sexuality = $request->sexuality;
        $student->address = $request->address;
        $student->age = $request->age;
        $student->nCar = $request->nCar;
        

        /**Actualizar la informacion */
        $student->save();
        return $student;
    }

    public function destroy(Request $request)
    {
        $student = Student::find($request->id);
        $student->delete();
        $student = Student::all();
        return $student;
    }
    //generar un token
    public function create_token(){            
        return csrf_token();
    }
}
