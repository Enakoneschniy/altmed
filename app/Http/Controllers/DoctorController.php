<?php

namespace App\Http\Controllers;

use App\Models\Category;
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

    public function mShowNews(Category $category)
    {
        $this->data['categories'] = $category->news;
        return $this->data;
    }
}
