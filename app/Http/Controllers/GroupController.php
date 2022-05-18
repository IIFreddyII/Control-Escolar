<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GroupController extends Controller
{
    
    public function index()
    {
        $groups = Group::all();
        return $groups;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:groups,name',
            'size' => 'required',
            'idCar' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $group = Group::create([
            'name' => $request->name,
            'size' => $request->size,
            'idCar' => $request->idCar,
        ]);
        echo $request->name;
    }

    
    public function show($id)
    {
        $group = Group::find($id);
        return $group;
    }

    
    public function edit(Group $group)
    {
        //
    }


    public function update(Request $request, $id)
    {
        /*validacion de los campos
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:groups,name',
            'size' => 'required',
            'idCar' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        */
        $group = Group::find($id);
        $group->name = $request->name;
        $group->size = $request->size;
        $group->idCar = $request->idCar;

        /**Actualizar la informacion */
        $group->save();
        return $group;
    }

    
    public function destroy($id)
    {
        $group = Group::find($id);
        $group->delete();
        $group = Group::all();
        return $group;
    }
}
