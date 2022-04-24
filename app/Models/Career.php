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
}
