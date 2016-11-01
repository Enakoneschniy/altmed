<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;

class ConsultationController extends MainController
{
    public function index(){
        
        return view('desktop.consultation', $this->data);
    }
    public function detail($category, $post){
        $service = News::find($post);
        $cat = Category::find($category);
        //dd($this->data);
        $this->data['pages'] = [
            'category' => [
                'title' => $cat->getTitle(),
                'url' => '/consultation/'.$category,
                'section' => [
                    'title' => $cat->parent->getTitle(),
                    'url' => '/consultation'
                ]
            ],
            'title' => $service->getTitle(),
            'url' => '/consultation/'.$category.'/'.$post
        ];
        $this->data['post'] = $service;
        return view('desktop.service.detail', $this->data);
    }
    public function mIndex(){

        return view('mobile.consultation', $this->data);
    }
}
