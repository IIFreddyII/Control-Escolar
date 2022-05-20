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

    //one to one(user-student)
    public function user(){
        return $this->belongsTo(User::class,'id');
    }


     //one to many(Students-StudentSubject)
    public function studentSubject(){
        return $this->hasMany('App\Models\StudentSubject','id');
    }
}
