<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'admin','as'=>'admin.','middleware'=>'auth'],function (){

});