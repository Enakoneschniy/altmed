<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class IndexController extends MainController
{
    public function index(){
        $this->data['jobsService'] = Job::all()->toArray();
        $this->data['jobsConsult'] = Job::all()->toArray();
        return view('welcome', $this->data);
    }
    public function mIndex(){
        return view('mobile.index', $this->data);
    }
}
