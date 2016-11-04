<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use App\Models\Category;
use App\Models\Job;
use App\Models\Vacancy;
use App\Models\Doctor;
use App\Models\Specialty;
use App\Models\Qualify;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class IndexController extends MainController
{
    public function index(Category $category, Carousel $carousel, Vacancy $vacancy){
        $this->data['leftItems'] = $category->getRootCategoriesHome();
        $doctors = Doctor::where('active', true)->get();
        $arConsultation = [];
        foreach($doctors as $doctor){
            $arConsultation['specialties'][$doctor->specialty->id]['title'] = $doctor->specialty->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['title'] = $doctor->job->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['doctors'][$doctor->id] = $doctor;
        }   
        //dd($arConsultation);
        $this->data['consultation'] = $arConsultation;
        $this->data['slides'] = $carousel->getSlides();
        $this->data['vacancies'] = $vacancy->getActives();
        return view('welcome', $this->data);
    }
    public function mIndex(){
        return view('mobile.index', $this->data);
    }
}
