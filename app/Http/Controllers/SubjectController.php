<?php

namespace App\Http\Controllers;
use App\Models\Subject;
use Illuminate\Http\Request;


class SubjectController extends Controller
{
    
    public function index()
    {
        $subjects = Subject::all();
        return $subjects;
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        //
    }

    
    public function show(Subject $subject)
    {
        //
    }

    
    public function edit(Subject $subject)
    {
        //
    }

    
    public function update(Request $request, Subject $subject)
    {
        //
    }

    
    public function destroy(Subject $subject)
    {
        //
    }
}
