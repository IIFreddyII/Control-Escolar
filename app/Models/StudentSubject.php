<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSubject extends Model
{
    use HasFactory;
    protected $fillable = [
        'idSubject',
        'idStudent',
        'cal',
    ];

    //one to many(Students-StudentSubject)
    public function student(){
        return $this->belongsTo('App\Models\Student','idStudent');
    }

    //one to one(StudentSubject-Subject) 
    public function subject()
    {
        return $this->hasOne('App\Models\Subject','idSubject');
    }
}
