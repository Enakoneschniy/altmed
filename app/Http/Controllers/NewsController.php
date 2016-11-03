<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;

class NewsController extends MainController
{
    public function index()
    {

        return view('desktop.news.list', $this->data);
    }
    public function detail($category, $post){
        $service = News::find($post);
        $cat = Category::find($category);
        //dd($this->data);
        $this->data['pages'] = [
            'category' => [
                'title' => $cat->getTitle(),
                'url' => '/news/'.$category,
                'section' => [
                    'title' => $cat->parent->getTitle(),
                    'url' => '/news'
                ]
            ],
            'title' => $service->getTitle(),
            'url' => '/news/'.$category.'/'.$post
        ];
        $this->data['post'] = $service;
        return view('desktop.service.detail', $this->data);
    }

    public function mIndex(Category $category)
    {
        $this->data['categories'] = $category->getSpecificCategories('ico_news')[0]->getChildrenCategories();
        return view('mobile.news.list', $this->data);
    }

    /**
     * @param Category $category
     * @return mixed
     */
    public function mShow(Category $category)
    {
        $this->data['category'] = $category;
        $this->data['categories'] = $category->getChildrenCategories();
        return view('mobile.tabs.news', $this->data);
    }

    /**
     * @param News $news
     * @return mixed
     */
    public function mSingle(News $news)
    {
        $this->data['news'] = $news;
        return view('mobile.news.detail', $this->data);
    }
}