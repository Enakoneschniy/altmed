<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Vacancy;
use Illuminate\Http\Request;

use App\Http\Requests;

class DoctorController extends MainController
{
    public function index()
    {

        return view('desktop.for-doctors.list', $this->data);
    }

    /**
     * @param Category $category
     * @return mixed
     */
    public function mIndex(Category $category)
    {

        $this->data['categories'] = $category->getDoctorCategories()[0]->getChildrenCategories();
        return view('mobile.for-doctors.list', $this->data);
    }

    /**
     * @param Category $category
     * @return mixed
     */
    public function mShow(Category $category)
    {
        $this->data['categories'] = $category->getChildrenCategories();
        return view('mobile.tabs.news', $this->data);
    }

    public function mVacancies(Vacancy $vacancy)
    {
        $this->data['vacancies'] = $vacancy->getActives();
        return view('mobile.tabs.vacancies', $this->data);
    }

    public function mVacancy(Vacancy $vacancy)
    {
        $this->data['vacancy'] = $vacancy;
        return view('mobile.for-doctors.vacancy', $this->data);
    }
    
//
//    public function mShowNews(Category $category)
//    {
//        $this->data['categories'] = $category->news;
//        $i = -1;
//        foreach ($category->news as $news){
//            ++$i;
//            $this->data['categories'][$i]->doctor_name = $news->doctor['name_ru'];
//        }
//        return $this->data;
//    }
}
