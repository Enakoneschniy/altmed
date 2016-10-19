<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ContactsController extends MainController
{
    public function index(){

        return view('desktop.contacts', $this->data);
    }
    public function mIndex(){

        return view('mobile.contacts', $this->data);
    }
}
