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
        //$subject = new Subject();
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'nSub' => 'required|max:3|unique:subjects,nSub',
            'name' => 'required|max:20|unique:subjects,name',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $subject = Subject::create([
            'nSub' => $request->nSub,
            'name' => $request->name,
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
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'nSub' => 'required|max:3|unique:subjects,nSub',
            'name' => 'required|max:20|unique:subjects,name',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        
        $subject = Subject::find($request->id);
        $subject->nSub = $request->nSub;
        $subject->name = $request->name;

        /**Actualizar la informacion */
        $subject->save();
        return $subject;
    }

    
    public function destroy(Request $request)
    {
        $subject = Subject::find($request->id);
        $subject->delete();
        $subject = Subject::all();
        return $subject;
    }

    //generar un token
    public function create_token(){
        return csrf_token();
    }
}
