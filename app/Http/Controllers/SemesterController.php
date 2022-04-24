<?php

namespace App\Http\Controllers;

use App\Models\Semester;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SemesterController extends Controller
{
    
    public function index()
    {
        $semesters = Semester::all();
        return $semesters;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idCareer' => 'required',
            //'idSubject' => 'required|unique:semesters,idSubject',
            'name' => 'required',
            'period' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $semester = Semester::create([
            'idCareer' => $request->idCareer,
            //'idSubject' => $request->idSubject,
            'name' => $request->name,
            'period' => $request->period,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $semester = Semester::find($id);
        return $semester;
    }

    
    public function edit(Semester $semester)
    {
        //
    }

    
    public function update(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'idCareer' => 'required',
            //'idSubject' => 'required|unique:semesters,idSubject',
            'name' => 'required',
            'period' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $semester = Semester::find($request->id);
        $semester->idCareer = $request->idCareer;
       // $semester->idSubject = $request->idSubject;
        $semester->name = $request->name;
        $semester->period = $request->period;

        /**Actualizar la informacion */
        $semester->save();
        return $semester;
    }

    
    public function destroy($id)
    {
        $semester = Semester::find($id);
        $semester->delete();
        //$subject = Subject::all();
        echo "Eliminado con exito";
        //return $subject;
    }
}
