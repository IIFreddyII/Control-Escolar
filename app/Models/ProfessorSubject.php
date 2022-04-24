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
}
