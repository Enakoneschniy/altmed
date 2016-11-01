<?php

namespace App\Models;

use Carbon\Carbon;
use Folklore\Image\Facades\Image;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    public $fillable = ['title_ru', 'title_ua', 'image', 'description_ru', 'description_ua', 'data', 'active'];
    public function setImageAttribute($file){
        //getting timestamp
        $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

        $name = $timestamp. '-' .$file->getClientOriginalName();
        $file->move(public_path().'/images/uploads/vacancy/', $name);
        $this->attributes['image'] = '/images/uploads/vacancy/'.$name;
    }
    public function getActives(){
        return $this->where('active', true)->get();
    }
    public function getTitle(){
        return $this->attributes['title_'.session('locale')];
    }
    public function getPreview(){
        $description = $this->attributes['description_'.session('locale')];
        $description = strip_tags($description);
        return mb_substr($description, 0, 20, 'utf-8');
    }
    public function previewImage(){
        $img = md5($this->image);
        $pointIndex = strrpos($this->image, '.');
        $type = substr($this->image, $pointIndex);
        $newImg = public_path().'/images/resize/'.$img.$type;
        if(!file_exists($newImg)) {
            Image::make($this->image, array(
                'width' => 213,
                'height' => 170,
            ))->save($newImg);
            $index = strpos($newImg, 'images');
            $url = '/'.substr($newImg, $index);
            return $url;
        }else{
            $index = strpos($newImg, 'images');
            $url = '/'.substr($newImg, $index);
            return $url;
        }
    }
    public function getDescription(){
        return $this->attributes['description_'.session('locale')];
    }
}
