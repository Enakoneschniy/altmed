<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ConsultationController extends MainController
{
    public function index(){
        
        return view('desktop.consultation', $this->data);
    }
}
