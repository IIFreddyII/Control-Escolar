<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $fillable = [
        //'idCareer',
        'name', 
        'size', 
        'idCar',   
    ];

     //one to many(carrer-group)
     public function career()
    {
        return $this->belongsTo('App\Models\Career','id');
    }
}
