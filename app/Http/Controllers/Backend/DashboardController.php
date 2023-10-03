<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public static $component ="Backend/Pages/";
    public function dashboard()
    {
        return Inertia::render(self::$component.'Dashboard/Dashboard',[
            "title"=>"Admin Dashboard"
        ]);
    }
}
