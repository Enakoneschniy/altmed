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

    public function getUploadSettings()
    {
        return [
            'image' => [
                'orientate' => [],
                'resize' => [1280, null, function ($constraint) {
                    $constraint->upsize();
                    $constraint->aspectRatio();
                }]
            ],
            'main_image' => [
                'orientate' => [],
                'fit' => [200, 300, function ($constraint) {
                    $constraint->upsize();
                    $constraint->aspectRatio();
                }]
            ]
        ];
    }
    public function setMainImageAttribute($file){
        //getting timestamp
        $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

        $name = $timestamp. '-' .$file->getClientOriginalName();
        $file->move(public_path().'/images/uploads/news/main/', $name);
        $this->attributes['main_image'] = '/images/uploads/news/main/'.$name;
    }

    public function setImageAttribute($file){
        //getting timestamp
        $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

        $name = $timestamp. '-' .$file->getClientOriginalName();
        $file->move(public_path().'/images/uploads/news/detail/', $name);
        $this->attributes['image'] = '/images/uploads/news/detail/'.$name;
    }

    public function setGalleryAttribute($images){
        $this->attributes['gallery'] = json_encode($images);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
}
