<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/',[HomeController::class,'home']);
Route::get('/quiz',[HomeController::class,'quiz']);
Route::get('/user',[HomeController::class,'user']);
Route::get('/leader-board',[HomeController::class,'leaderBoard']);
Route::post('/logout',[HomeController::class,'logout']);
