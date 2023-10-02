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
            "metaDescription"=>"This is my meta description"
        ]);
    }

    public function quiz()
    {
        return Inertia::render(self::$component.'Quiz/Quiz',[
            'title'=>"Quiz"
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
