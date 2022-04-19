<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return $departments;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:20|unique:departments,name',
            'ext' => 'required|unique:departments,ext',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $department = Department::create([
            'name' => $request->name,
            'ext' => $request->ext,
        ]);
        echo $request->name;
    }

    public function show($id)
    {
        $department = Department::find($id);
        return $department;
    }

    public function edit(Department $department)
    {
        //
    }

    public function update(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:20|unique:departments,name',
            'ext' => 'required|unique:departments,ext',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $department = Department::find($request->id);
        $department->name = $request->name;
        $department->ext = $request->ext;

        /**Actualizar la informacion */
        $department->save();
        return $department;
    }

    public function destroy(Request $request)
    {
        $department = Department::find($request->id);
        $department->delete();
        $department = Department::all();
        return $department;
    }
    //generar un token
    public function create_token(){
        return csrf_token();
    }
}
