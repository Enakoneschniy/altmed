<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    public function news(){
        return $this->belongsTo(News::class);
    }
    public function setImageAttribute($file){
        //getting timestamp
        $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

        $name = $timestamp. '-' .$file->getClientOriginalName();
        $file->move(public_path().'/images/uploads/carousel/', $name);
        $this->attributes['image'] = '/images/uploads/carousel/'.$name;
    }

    public function getSlides(){
        return $this->where('published', true)->get();
    }

    public function getTitle(){
        return $this->attributes['title_'.session('locale')];
    }

    public function getText(){
        return mb_substr($this->attributes['text_'.session('locale')], 0, 300, 'utf-8');
    }

    public function getLink(){
        return "/news";
    }
}
