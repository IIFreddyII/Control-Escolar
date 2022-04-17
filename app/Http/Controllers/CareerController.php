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
            'nameCar' => 'required|max:20|unique:careers,nameCar',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        
        $career = Career::create([
            'nameCar' => $request->nameCar,
        ]);
        echo $career->nameCar;
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

    
    public function update(Request $request)
    {
         /*validacion de los campos*/
         $validator = Validator::make($request->all(), [
            'nameCar' => 'required|max:20|unique:careers,nameCar',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }
        
        $career = Career::find($request->id);
        $career->nameCar = $request->nameCar;

        /**Actualizar la informacion */
        $career->save();
        return $career;
    }

    
    public function destroy(Request $request)
    {
        $career = Career::find($request->id);
        $career->delete();
        $career = Career::all();
        return $career;
    }
    //generar un token
    public function create_token(){            
        return csrf_token();
    }
}
