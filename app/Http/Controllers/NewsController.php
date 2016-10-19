<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class NewsController extends MainController
{
    public function index(){

        return view('desktop.news.list', $this->data);
    }
    public function mIndex(){

        return view('mobile.news.list', $this->data);
    }
}