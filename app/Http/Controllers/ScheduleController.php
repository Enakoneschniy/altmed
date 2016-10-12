<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ScheduleController extends MainController
{
    public function index(){

        return view('desktop.schedule', $this->data);
    }
}