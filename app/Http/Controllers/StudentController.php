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
        $students = Students::all();
        return $students;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //$subject = new Subject();
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'nCtl' => 'required|max:3|unique:subjects,nCtl',
            'name' => 'required|max:20',
            'sexuality' => 'required|max:1',
            'address' => 'required|max:20',
            'age' => 'required|max:2',
            'nCar' => 'required|max:2',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $subject = Subject::create([
            'nCtl' => $request->nCtl,
            'name' => $request->name,
            'sexuality' => $request->sexuality,
            'address' => $request->address,
            'age' => $request->age,
            'nCar' => $request->nCar,
        ]);
        echo $request->name;
    }

    public function show(Student $student)
    {
        //
    }

    public function edit(Student $student)
    {
        //
    }

    public function update(Request $request, Student $student)
    {
        //
    }

    public function destroy(Student $student)
    {
        //
    }
    //generar un token
    public function create_token(){            
        return csrf_token();
    }
}
