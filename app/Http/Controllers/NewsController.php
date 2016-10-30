<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

use App\Http\Requests;

class NewsController extends MainController
{
    public function index()
    {

        return view('desktop.news.list', $this->data);
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