<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Vacancy;
use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;

class DoctorController extends MainController
{
    /*public function index(Category $category)
    {
        return view('desktop.for-doctors.list', $this->data);
    }*/
    public function index(Category $category, Request $request)
    {
        $this->data['left'] = $category->getForDoctorCategories();
        $this->data['news'] = News::where([[
            'category_id', '!=', 23
        ]])->paginate(8);
        if ($request->ajax()) {
            return view('desktop.ajax_news', $this->data);
        }
        return view('desktop.for-doctors.list', $this->data);

    }
    public function listN($category, Category $cat, Request $request){
        $this->data['left'] = $cat->getForDoctorCategories();
        foreach ($this->data['left']['child_cat'] as &$item) {
            if($item->id == $category){
                $item->select = true;
            }
        }
        $this->data['news'] = News::where('category_id', $category)->paginate(8);
        if ($request->ajax()) {
            return view('desktop.ajax_news', $this->data);
        }
        return view('desktop.for-doctors.list', $this->data);
    }
    public function detail($category, $post)
    {
        $service = News::find($post);
        $cat = Category::find($category);
        //dd($this->data);
        $this->data['pages'] = [
            'category' => [
                'title' => $cat->getTitle(),
                'url' => '/for-doctors/' . $category,
                'section' => [
                    'title' => $cat->parent->getTitle(),
                    'url' => '/for-doctors'
                ]
            ],
            'title' => $service->getTitle(),
            'url' => '/for-doctors/' . $category . '/' . $post
        ];
        $this->data['post'] = $service;
        return view('desktop.service.detail', $this->data);
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

    public function mVacancyForm()
    {

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
