<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'credit',
        'idSemester',
    ];

    //one to one (StudentSubject-subject)
    public function studentSubject()
    {
        return $this->belongsTo('App\Models\StudentSubject','idSubject');
    }

    //one to many(Professor-subject)
    public function profesorSubject()
    {
        return $this->belongsTo('App\Models\ProfessorSubject','idProfessor');
    }

    //one to many (semester-subject)
    public function semester()
    {
        return $this->belongsTo('App\Models\Semester','id');
    }
}
