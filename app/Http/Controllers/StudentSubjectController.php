<?php

namespace App\Http\Controllers;

use App\Models\StudentSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StudentSubjectController extends Controller
{

    public function index()
    {
        $studentSubjects = StudentSubject::all();
        return $studentSubjects;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idSubject' => 'required|unique:student_subjects,idSubject',
            'idStudent' => 'required',
            'cal' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $studentSubject = StudentSubject::create([
            'idSubject' => $request->idSubject,
            'idStudent' => $request->idStudent,
            'cal' => $request->cal,
        ]);
        //echo $request->name;
        echo "Agregado Correctamente";
    }

    
    public function show($id)
    {
        $studentSubject = StudentSubject::find($id);
        return $studentSubject;
    }

   
    public function edit(StudentSubject $studentSubject)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idSubject' => 'required|unique:student_subjects,idSubject',
            'idStudent' => 'required',
            'cal' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $studentSubject = StudentSubject::find($id);
        $studentSubject->idSubject = $request->idSubject;
        $studentSubject->idStudent = $request->idStudent;
        $studentSubject->cal = $request->cal;

        /**Actualizar la informacion */
        $studentSubject->save();
        return $studentSubject;
    }

    
    public function destroy($id)
    {
        $studentSubject = StudentSubject::find($id);
        $studentSubject->delete();
        echo "Registros Eliminados";
    }
}
