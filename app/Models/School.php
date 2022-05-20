<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;
    protected $fillable = [
        //'idSchool',
        'clave', 
        'name', 
        'address', 
        'tel', 
        'email', 
    ];

    //one to many(school-career)
    public function career()
    {
        return $this->hasMany('App\Models\Career','idSchool');
    }
}
