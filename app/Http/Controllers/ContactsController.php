<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\About;
use Illuminate\Http\Request;

use App\Http\Requests;

class ContactsController extends MainController
{
    public function index(){
        $this->data['schedules'] = About::all();
        $this->data['addresses'] = Address::all();
        return view('desktop.contacts', $this->data);
    }
    public function mIndex(){
        $this->data['contacts'] = ['1',2, 3];
        return view('mobile.contacts', $this->data);
    }
}
