<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SchoolController extends Controller
{
    public function index()
    {
        $schools = School::all();
        return $schools;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'clave' => 'required',
            'name' => 'required',
            'address' => 'required',
            'tel' => 'required',
            'email' => 'required|email',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $school = School::create([
            'clave' => $request->clave,
            'name' => $request->name,
            'address' => $request->address,
            'tel' => $request->tel,
            'email' => $request->email,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $school = School::find($id);
        return $school;
    }

    
    public function edit(School $school)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'clave' => 'required',
            'name' => 'required',
            'address' => 'required',
            'tel' => 'required',
            'email' => 'required|email',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $school = School::find($request->id);
        $school->clave = $request->clave;
        $school->name = $request->name;
        $school->address = $request->address;
        $school->tel = $request->tel;
        $school->email = $request->email;

        /**Actualizar la informacion */
        $school->save();
        return $school;
    }

    public function destroy($id)
    {
        $school = School::find($id);
        $school->delete();
        $school = School::all();
        return $school;
    }
}
