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
            
            'name' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'sex' => 'required',
            'curp' => 'required|max:18|unique:professors,curp',
            'address' => 'required',
            'tel' => 'required|max:10|unique:professors,tel',
            'cedula' => 'required|max:10|unique:professors,tel',
            'academic_degree' => 'required',
            'specialty' => 'required',

        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $professor = Professor::create([
            
            'name' => $request->name,
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'email' => $request->email,
            'sex' => $request->sex,
            'curp' => $request->curp,
            'address' => $request->address,
            'tel' => $request->tel,
            'cedula' => $request->cedula,
            'academic_degree' => $request->academic_degree,
            'specialty' => $request->specialty,
        ]);
        echo "Profesor: ",$request->name," ",$request->firstName;
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

   
    public function update(Request $request, $id)
    {
        /*validacion de los campos
        $validator = Validator::make($request->all(), [
            'idUser' => 'required',
            'name' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'sex' => 'required',
            'curp' => 'required|max:18',
            'address' => 'required',
            'tel' => 'required|max:10',
            'cedula' => 'required|max:10',
            'academic_degree' => 'required',
            'specialty' => 'required',

        ]);
        
        if($validator->fails()){
            return $validator->errors();
        }

        */
        $professor = Professor::find($id);
        $professor->name = $request->name;
        $professor->firstName = $request->firstName;
        $professor->lastName = $request->lastName;
        $professor->email= $request->email;
        $professor->sex = $request->sex;
        $professor->curp = $request->curp;
        $professor->address = $request->address;
        $professor->tel = $request->tel;
        $professor->cedula = $request->cedula;
        $professor->academic_degree = $request->academic_degree;
        $professor->specialty = $request->specialty;

        /**Actualizar la informacion */
        $professor->save();
        return $professor;
    }

    
    public function destroy($id)
    {
        $professor = Professor::find($id);
        $professor->delete();
        echo "Registro Eliminado";
    }
}
