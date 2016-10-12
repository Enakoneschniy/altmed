<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

use App\Http\Requests;

class AboutController extends MainController
{
    public function index(Review $review){
        $this->data['reviews'] = $review->getActiveItems();

        return view('desktop.about', $this->data);
    }
}
