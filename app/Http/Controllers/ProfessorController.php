<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProfessorController extends Controller
{
    public function index()
    {
        $professors = Professor::all();
        return $professors;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:20|unique:professors,name',
            'sexuality' => 'required|max:1',
            'nDep' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $professor = Professor::create([
            'name' => $request->name,
            'sexuality' => $request->sexuality,
            'nDep' => $request->nDep,
        ]);
        echo $request->name;
    }

    public function show($id)
    {
        $professor = Professor::find($id);
        return $professor;
    }

    public function edit(Professor $professor)
    {
        //
    }

    public function update(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:20|unique:professors,name',
            'sexuality' => 'required|max:1',
            'nDep' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $professor = Professor::find($request->id);
        $professor->name = $request->name;
        $professor->sexuality = $request->sexuality;
        $professor->nDep = $request->nDep;

        /**Actualizar la informacion */
        $professor->save();
        return $professor;
    }

    public function destroy(Request $request)
    {
        $professor = Professor::find($request->id);
        $professor->delete();
        $professor = Professor::all();
        return $professor;
    }
    //generar un token
    public function create_token(){
        return csrf_token();
    }
}
