<?php

namespace App\Http\Controllers;

use App\Models\ProfessorSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProfessorSubjectController extends Controller
{
    
    public function index()
    {
        $professorSubjects = ProfessorSubject::all();
        return $professorSubjects;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idProfessor' => 'required',
            'idSubject' => 'required|unique:professor_subjects,idSubject',
            'period' => 'required',
            'year' => 'Required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $professorSubject = ProfessorSubject::create([ 
            'idProfessor' => $request->idProfessor,
            'idSubject' => $request->idSubject,
            'period' => $request->period,
            'year' => $request->year,
        ]);
        //echo $request->name;
        echo "Agregado Correctamente";
    }

    
    public function show($id)
    {
        $professorSubject = ProfessorSubject::find($id);
        return $professorSubject;
    }

    
    public function edit(ProfessorSubject $professorSubject)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idProfessor' => 'required',
            'idSubject' => 'required|unique:professor_subjects,idSubject',
            'period' => 'required',
            'year' => 'Required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $professorSubject = ProfessorSubject::find($id);
        $professorSubject->idProfessor = $request->idProfessor;
        $professorSubject->idSubject = $request->idSubject;
        $professorSubject->period = $request->period;
        $professorSubject->year = $request->year;

        $professorSubject->save();
        return $professorSubject;
    }

    
    public function destroy($id)
    {
        $professorSubject = ProfessorSubject::find($id);
        $professorSubject->delete();
        echo "Registro Eliminado";
    }
}
