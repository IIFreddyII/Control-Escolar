<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*Subject*/

/**Gerarr token */
Route::get('/create_token', [SubjectController::class, 'create_token']);
/*Ruta para ver todos los datos de todas las materias*/
Route::get('/subjects_index', [SubjectController::class, 'index']);
/*Ruta Insertar datos */
Route::post('/subject_insert', [SubjectController::class, 'store']);
/*Ruta para ver datos por ID*/
Route::get('/subject_show/{id}', [SubjectController::class, 'show']);
/*Ruta para ver todos los datos de todas las materias*/
Route::put('/subject_update', [SubjectController::class, 'update']);
/*Ruta para eliminar registros*/
Route::post('/subject_delete', [SubjectController::class, 'destroy']);

/*Careers*/
/**Gerarr token */
Route::get('/create_token_career', [CareerController::class, 'create_token']);
/*Ruta para ver todos los datos de todas las carreras*/
Route::get('/career_index', [CareerController::class, 'index']);
/*Ruta Insertar carreras */
Route::post('/career_insert', [CareerController::class, 'store']);
/*Ruta para ver datos por ID de carreras*/
Route::get('/career_show/{id}', [CareerController::class, 'show']);
/*Ruta para ver todos los datos de todas las carreras*/
Route::put('/career_update', [CareerController::class, 'update']);
/*Ruta para eliminar registros*/
Route::post('/career_delete', [CareerController::class, 'destroy']);


/*Student*/
/**Gerarr token */
Route::get('/create_token_student', [StudentController::class, 'create_token']);
/*Ruta para ver todos los datos de los estudiantes*/
Route::get('/student_index', [StudentController::class, 'index']);
/*Ruta Insertar datos */
Route::post('/student_insert', [StudentController::class, 'store']);
