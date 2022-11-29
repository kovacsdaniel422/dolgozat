<?php

use App\Http\Controllers\EventsController;
use Illuminate\Support\Facades\Route;

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

Route::get('/api/events', [EventsController::class,'index']); 
Route::get('/api/events/{id}', [EventsController::class,'show']);
Route::post('/api/events', [EventsController::class,'store']); 
Route::put('/api/events/{id}', [EventsController::class,'update']); 
Route::delete('/api/events/{id}', [EventsController::class,'destroy']); 

/* view */
Route::get('events/list', [EventsController::class,'listView']); 
