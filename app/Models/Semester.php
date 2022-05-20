<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    use HasFactory;
    protected $fillable = [
        'idCareer',
        //'idSubject',
        'name',
        'period', //Periodo escolar
    ];

    //one to many (semester-subject)
    public function subject()
    {
        return $this->hasMany('App\Models\Subject','idSemester');
    }

    //one to many(Career-Semester)
    public function career()
    {
        return $this->belongsTo('App\Models\Career','id');
    }
}
