<?php

use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/',[HomeController::class,'home']);
Route::get('/quiz',[HomeController::class,'quize']);
Route::get('/leader-board',[HomeController::class,'leaderBoard']);
