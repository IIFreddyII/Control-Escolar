<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfessorSubject extends Model
{
    use HasFactory;
    protected $fillable = [
        'idProfessor',
        'idSubject',
        'period',
        'year',
    ];

    //one to many (Professor-Subject)
    public function subject()
    {
        return $this->hasMany('App\Models\Subject','id');
    }
    
    //one to many (Professor- ProfessorSubject)
    public function professor()
    {
        return $this->belongsTo('App\Models\Professor'.'id');
    }
}