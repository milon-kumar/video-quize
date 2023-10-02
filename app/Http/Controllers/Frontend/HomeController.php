<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
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

    public static function quiz()
    {
        return Inertia::render(self::$component.'Quiz/Quiz',[
            'title'=>"Quiz"
        ]);
    }

    public function user()
    {

        return User::paginate(10);

        return Inertia::render(self::$component.'User/User',[
            'users'=>User::all()->map(fn($user)=>[
                'name'=>$user->name,
                'email'=>$user->email
            ]),
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
