<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'email',
        'name',
        'firstName',
        'lastName',
        'sex',
        'curp',
        'address',
        'tel',
    ];

     //one to many(Students-StudentSubject)
    public function studentSubject(){
        return $this->hasMany('App\Models\StudentSubject','id');
    }
}
