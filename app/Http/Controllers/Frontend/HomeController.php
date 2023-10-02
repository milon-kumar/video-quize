<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public static $component = "Frontend/Pages/";
    public function home()
    {
        return Inertia::render(self::$component.'Home/Home',[
            'title'=>"Home",
        ]);
    }

    public function quize()
    {
        return Inertia::render(self::$component.'Quize/Quize',[
            'title'=>"Quize"
        ]);
    }

    public function leaderBoard()
    {
        return Inertia::render(self::$component.'LeaderBoard/LeaderBoard',[
            'title'=>"Leader Board",
            'time'=>now()->toTimeString(),
        ]);
    }

    public function logout()
    {
        dd('Logout Success');
    }
}
