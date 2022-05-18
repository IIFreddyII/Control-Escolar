<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::all();
        return $subjects;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:45|unique:subjects,name',
            'credit' => 'required|max:1',
            'idSemester' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $subject = Subject::create([
            'name' => $request->name,
            'credit' => $request->credit,
            'idSemester' =>$request->idSemester,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $subject = Subject::find($id);
        return $subject;
    }


    
    public function edit(Subject $subject)
    {
        //
    }

    
    public function update(Request $request)
    {
        /*validacion de los campos
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:45|unique:subjects,name',
            'credit' => 'required|max:1',
            'idSemester' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        */
        
        $subject = Subject::find($request->id);
        $subject->name = $request->name;
        $subject->credit = $request->credit;
        $subject->idSemester = $request->idSemester;

        /**Actualizar la informacion */
        $subject->save();
        return $subject;
    }

    
    public function destroy($id)
    {
        $subject = Subject::find($id);
        $subject->delete();
        //$subject = Subject::all();
        echo "Eliminados con exito";
        //return $subject;
    }
}
