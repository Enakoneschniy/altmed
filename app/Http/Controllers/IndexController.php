<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class IndexController extends MainController
{
    public function index(){
        return view('welcome', $this->data);
    }
}
