<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;

class News extends Model
{
    public function getGalleryAttribute($images){
        return json_decode($images);
    }

    public function setMainImageAttribute($file){
        if(!is_string($file)) {
            //getting timestamp
            $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            $name = $timestamp . '-' . $file->getClientOriginalName();
            $file->move(public_path() . '/images/uploads/news/main/', $name);
            $this->attributes['main_image'] = '/images/uploads/news/main/' . $name;
        }else{
            //if(strpos($file, 'http')){
                $index = strpos($file, 'images');
                $file = '/'.substr($file, $index);
            //}
            $this->attributes['main_image'] = $file;
        }
    }

    public function setImageAttribute($file){
        if(!is_string($file)) {
            //getting timestamp
            $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            $name = $timestamp . '-' . $file->getClientOriginalName();
            $file->move(public_path() . '/images/uploads/news/detail/', $name);
            $this->attributes['image'] = '/images/uploads/news/detail/' . $name;
        }else{
            //if(strpos($file, 'http')){
                $index = strpos($file, 'images');
                $file = '/'.substr($file, $index);
            //}
            $this->attributes['image'] = $file;
        }
    }

    public function setGalleryAttribute($images){
        $this->attributes['gallery'] = json_encode($images);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function carousels(){
        $this->hasMany(Carousel::class);
    }

    public function getTitle(){
        return $this->attributes['title_'.session('locale')];
    }

    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }
}
