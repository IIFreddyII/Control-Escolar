<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        //'nCtl',  //numero de control
        'name', //nombre estudiante
        'sexuality', //sexo
        'address', //domiciolio
        'age', //edad
        'nCar', //numero de carrera
    ];
}
