<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\URL;

class ServiceController extends MainController
{
    public function index(){

        return view('desktop.service.list', $this->data);
    }
    public function detail($category, $post){
        $this->data['post'] = News::find($post);
        //dd($this->data);
        return view('desktop.service.detail', $this->data);
    }
    public function mIndex(){

        return view('mobile.service', $this->data);
    }
}