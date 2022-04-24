<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'idUser',
        'name',
        'firstName',
        'lastName',
        'sex',
        'curp',
        'address',
        'tel',
    ];
}
