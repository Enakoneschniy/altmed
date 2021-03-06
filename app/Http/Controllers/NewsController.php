<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;

class NewsController extends MainController
{
    public function index(Category $category, Request $request)
    {

        $this->data['left'] = $category->getNewsCategories();
        $this->data['news'] = News::where([[
            'category_id', '!=', 23
        ]])->paginate(8);
        if ($request->ajax()) {
            return view('desktop.ajax_news', $this->data);
        }
        return view('desktop.news.list', $this->data);

    }
    public function listN($category, Category $cat, Request $request){
        $this->data['left'] = $cat->getNewsCategories();
        foreach ($this->data['left']['child_cat'] as &$item) {
            if($item->id == $category){
                $item->select = true;
            }
        }
        $this->data['news'] = News::where('category_id', $category)->paginate(8);
        if ($request->ajax()) {
            return view('desktop.ajax_news', $this->data);
        }
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
    public function mIndex()
    {

        return view('mobile.news.list', $this->data);
    }

    public function mSingle(News $news)
    {
        $this->data['news'] = $news;
        return view('mobile.news.detail', $this->data);
    }
}