<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\SemesterController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentSubjectController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\ProfessorSubjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::get('/user_index', [PassportAuthController::class, 'index']);
Route::post('/user_delete/{id}', [PassportAuthController::class, 'destroy']);


/*School*/
Route::get('/school_index', [SchoolController::class, 'index']);
Route::post('/school_insert', [SchoolController::class, 'store']);
Route::get('/school_show/{id}', [SchoolController::class, 'show']);
Route::put('/school_update/{id}', [SchoolController::class, 'update']);
Route::post('/school_delete/{id}', [SchoolController::class, 'destroy']);

/*Career*/
Route::get('/career_index', [CareerController::class, 'index']);
Route::post('/career_insert', [CareerController::class, 'store']);
Route::get('/career_show/{id}', [CareerController::class, 'show']);
Route::put('/career_update/{id}', [CareerController::class, 'update']);
Route::post('/career_delete/{id}', [CareerController::class, 'destroy']);

/*Group*/
Route::get('/group_index', [GroupController::class, 'index']);
Route::post('/group_insert', [GroupController::class, 'store']);
Route::get('/group_show/{id}', [GroupController::class, 'show']);
Route::put('/group_update/{id}', [GroupController::class, 'update']);
Route::post('/group_delete/{id}', [GroupController::class, 'destroy']);

/*Subject*/
Route::get('/subject_index', [SubjectController::class, 'index']);
Route::post('/subject_insert', [SubjectController::class, 'store']);
Route::get('/subject_show/{id}', [SubjectController::class, 'show']);
Route::put('/subject_update/{id}', [SubjectController::class, 'update']);
Route::post('/subject_delete/{id}', [SubjectController::class, 'destroy']);


/*Student*/
Route::get('/student_index', [StudentController::class, 'index']);
Route::post('/student_insert', [StudentController::class, 'store']);
Route::get('/student_show/{id}', [StudentController::class, 'show']);
Route::put('/student_update/{id}', [StudentController::class, 'update']);
Route::post('/student_delete/{id}', [StudentController::class, 'destroy']);

/*Semester*/
Route::get('/semester_index', [SemesterController::class, 'index']);
Route::post('/semester_insert', [SemesterController::class, 'store']);
Route::get('/semester_show/{id}', [SemesterController::class, 'show']);
Route::put('/semester_update/{id}', [SemesterController::class, 'update']);
Route::post('/semester_delete/{id}', [SemesterController::class, 'destroy']);

/*Student_Subject*/
Route::get('/studentSubject_index', [StudentSubjectController::class, 'index']);
Route::post('/studentSubject_insert', [StudentSubjectController::class, 'store']);
Route::get('/studentSubject_show/{id}', [StudentSubjectController::class, 'show']);
Route::put('/studentSubject_update/{id}', [StudentSubjectController::class, 'update']);
Route::post('/studentSubject_delete/{id}', [StudentSubjectController::class, 'destroy']);

/*Professor*/
Route::get('/professor_index', [ProfessorController::class, 'index']);
Route::post('/professor_insert', [ProfessorController::class, 'store']);
Route::get('/professor_show/{id}', [ProfessorController::class, 'show']);
Route::put('/professor_update/{id}', [ProfessorController::class, 'update']);
Route::post('/professor_delete/{id}', [ProfessorController::class, 'destroy']);

/*Professor_Subject*/
Route::get('/professorSubject_index', [ProfessorSubjectController::class, 'index']);
Route::post('/professorSubject_insert', [ProfessorSubjectController::class, 'store']);
Route::get('/professorSubject_show/{id}', [ProfessorSubjectController::class, 'show']);
Route::put('/professorSubject_update/{id}', [ProfessorSubjectController::class, 'update']);
Route::post('/professorSubject_delete/{id}', [ProfessorSubjectController::class, 'destroy']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

