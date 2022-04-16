<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubjectController;

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