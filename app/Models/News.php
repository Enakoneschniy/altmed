<?php

namespace App\Models;

use Carbon\Carbon;
use Folklore\Image\Facades\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Laravel\Scout\Searchable;

class News extends Model
{
    use Searchable;
    public function getGalleryAttribute($images){
        return json_decode($images);
    }

    public function setMainImageAttribute($file){
        if(!is_string($file) && !is_bool($file)) {
            //getting timestamp
            $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            $name = $timestamp . '-' . md5($timestamp);
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
        if(!is_string($file) && !is_bool($file)) {
            //getting timestamp
            $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            $name = $timestamp . '-' . md5($timestamp);
            $file->move(public_path() . '/images/uploads/news/detail/', $name);
            $this->attributes['image'] = '/images/uploads/news/detail/' . $name;
        }else{
            //if(strpos($file, 'http')){
                $index = strpos($file, 'images');
                if($index)
                    $file = '/'.substr($file, $index);
            //}
            $this->attributes['image'] = $file;
        }
    }
    public function previewImage($width = 213, $height = 170){
        $img = md5($this->main_image.$width.$height);
        $pointIndex = strrpos($this->main_image, '.');
        $type = substr($this->main_image, $pointIndex+1);
        if(!in_array($type, ["gif", "jpeg", "png", "wbmp", "xbm"])){
            $type = "jpeg";
        }
        $newImg = public_path().'/images/resize/'.$img.'.'.$type;
        if(!file_exists($newImg)) {
            Image::make($this->main_image, array(
                'width' => $width,
                'height' => $height,
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

    public function detailImage($width = 218, $height = 217){
        $img = md5($this->image.$width.$height);
        $pointIndex = strrpos($this->image, '.');
        $type = substr($this->image, $pointIndex+1);
        if(!in_array($type, ["gif", "jpeg", "png", "wbmp", "xbm"])){
            $type = "jpeg";
        }
        $newImg = public_path().'/images/resize/'.$img.'.'.$type;
        if(!file_exists($newImg)) {
            Image::make($this->image, array(
                'width' => $width,
                'height' => $height,
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
        $title = $this->attributes['title_'.session('locale')];
        if(mb_strlen($title, 'utf-8') > 40){
            $title = mb_substr($title, 0, 37, 'utf-8').'...';
        }
        return $title;
    }
    public function getFullTitle(){
        return $this->attributes['title_'.session('locale')];
    }

    /**
     * @return mixed
     */
    public function getFullText(){
        $galleryPattern = '[gallery]';
        $text = $this->attributes['text_'.session('locale')];
        $posGallery = mb_strpos($text, $galleryPattern);
        $gallery = [];
        if($posGallery){
            //dd($this->gallery);
            foreach ($this->gallery as $item){
                $index = strpos($item, 'images');
                $gallery[] = '/'.substr($item, $index);
            }
            //dd($this->gallery);

            $htmlGallery = view('desktop.gallery', ['gallery' => $gallery]);
            //dd($htmlGallery);
            $text = str_replace($galleryPattern, $htmlGallery, $text);
            return $text;
        }else{
            return $text;
        }
    }
    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }
}
