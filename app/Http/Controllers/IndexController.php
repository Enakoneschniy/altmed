<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use App\Models\Category;
use App\Models\Job;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class IndexController extends MainController
{
    public function index(Category $category, Carousel $carousel){
        $this->data['jobsService'] = Job::all()->toArray();
        $this->data['jobsConsult'] = Job::all()->toArray();

        $this->data['leftItems'] = $category->getRootCategories();
        $this->data['slides'] = $carousel->getSlides();
        return view('welcome', $this->data);
    }
    public function mIndex(){
        return view('mobile.index', $this->data);
    }
}
