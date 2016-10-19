<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ServiceController extends MainController
{
    public function index(){

        return view('desktop.service', $this->data);
    }
    public function mIndex(){

        return view('mobile.service', $this->data);
    }
}