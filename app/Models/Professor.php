<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
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
        'cedula',
        'academic_degree',
        'specialty',
    ];

    //one to one(user-professor)
    public function user()
    {
        return $this->belongsTo('App\Models\User','id');
    }

    //one to many(professor-professor-subject)
    public function professorSubject()
    {
        return $this->hasMany('App\Models\ProfessorSubject','idProfessor');
    }
}
