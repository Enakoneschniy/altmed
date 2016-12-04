<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

use App\Http\Requests;

class MapController extends MainController
{
    public function index(){
        $this->data['addresses'] = Address::all();
        return view('desktop.map', $this->data);
    }
    public function mIndex(){

        return view('mobile.map', $this->data);
    }
}
