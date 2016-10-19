<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class DoctorController extends MainController
{
    public function index(){

        return view('desktop.for-doctors.list', $this->data);
    }
    public function mIndex(){

        return view('mobile.for-doctors.list', $this->data);
    }
}
