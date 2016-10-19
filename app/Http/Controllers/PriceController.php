<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PriceController extends MainController
{
    public function index(){

        return view('desktop.prices', $this->data);
    }
    public function mIndex(){

        return view('mobile.prices', $this->data);
    }
}
