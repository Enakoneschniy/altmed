<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class IndexController extends MainController
{
    public function index(){
        //dd(session());
        return view('welcome', $this->data);
    }
}
