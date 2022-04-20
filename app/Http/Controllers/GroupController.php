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
            'nGrp' => 'required|max:2',
            'nPro' => '',
            'nSub' => '',
            'nCtl' => '',
            'cal' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $group = Group::create([
            'nGrp' => $request->nGrp,
            'nPro' => $request->nPro,
            'nSub' => $request->nSub,
            'nCtl' => $request->nCtl,
            'cal' => $request->cal,
        ]);
        echo $request->nGrp;
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


    public function update(Request $request)
    {
        /*validacion de los campos*/
        $validator = Validator::make($request->all(), [
            'nGrp' => 'required|max:2',
            'cal' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $group = Group::find($request->id);
        $group->nGrp = $request->nGrp;
        $group->cal = $request->cal;

        /**Actualizar la informacion */
        $group->save();
        return $group;
    }

    
    public function destroy(Request $request)
    {
        $group = Group::find($request->id);
        $group->delete();
        $group = Group::all();
        return $group;
    }
    //generar un token
    public function create_token(){
        return csrf_token();
    }
}
