<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CareerController extends Controller
{
    
    public function index()
    {
        $careers = Career::all();
        return $careers;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'clave' => 'required|unique:careers,clave',
            'name' => 'required|unique:careers,name',
            'area' => 'required',
            'idSchool' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        
        $career = Career::create([
            'clave' => $request->clave,
            'name' => $request->name,
            'area' => $request->area,
            'idSchool' => $request->idSchool,
        ]);
        echo $career->name;
    }

    
    public function show($id)
    {
        $career  = Career::find($id);
        return $career;
    }

    
    public function edit(Career $career)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        /*validacion de los campos
        $validator = Validator::make($request->all(), [
            'clave' => 'required|unique:careers,clave',
            'name' => 'required|unique:careers,name',
            'area' => 'required',
            'idSchool' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        */
        $career = Career::find($id);
        $career->clave = $request->clave;
        $career->name = $request->name;
        $career->area = $request->area;
        $career->idSchool = $request->idSchool;

        /**Actualizar la informacion */
        $career->save();
        return $career;
    }

    
    public function destroy($id)
    {
        $career = Career::find($id);
        $career->delete();
        $career = Career::all();
        return $career;
    }
}
