<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Doctor;
use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\URL;

class ServiceController extends MainController
{
    public function index(Category $category){
        $this->data['leftItems'] = $category->getRootCategoriesService();
        $doctors = Doctor::where('active', true)->get();
        $arConsultation = [];
        foreach($doctors as $doctor){
            $arConsultation['specialties'][$doctor->specialty->id]['title'] = $doctor->specialty->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['title'] = $doctor->job->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['doctors'][$doctor->id] = $doctor;
        }
        $this->data['consultation'] = $arConsultation;
        return view('desktop.service.list', $this->data);
    }
    public function detail($category, $post){
        $service = News::find($post);
        $cat = Category::find($category);
        //dd($this->data);
        $this->data['pages'] = [
            'category' => [
                'title' => $cat->getTitle(),
                'url' => '/services/'.$category,
                'section' => [
                    'title' => $cat->parent->getTitle(),
                    'url' => '/service'
                ]
            ],
            'title' => $service->getTitle(),
            'url' => '/service/'.$category.'/'.$post
        ];
        $this->data['post'] = $service;
        return view('desktop.service.detail', $this->data);
    }
    public function mIndex(){

        return view('mobile.service', $this->data);
    }
}