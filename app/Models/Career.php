<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;
    protected $fillable = [
        //'idCareer',
        'clave', 
        'name', 
        'area', 
        'idSchool',  
    ];

    //one to many(carrer-semester)
    public function semester()
    {
        return $this->hasMany('App\Models\Semester','idCareer');
    }

    //one to many(carrer-group)
    public function group()
    {
        return $this->hasMany('App\Models\Group','idCar');
    }

    //one to many(school-career)
    public function school()
    {
        return $this->belongsTo('App\Models\School','id');
    }
}
