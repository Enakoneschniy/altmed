<?php

namespace App\Models;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Folklore\Image\Facades\Image;
use Illuminate\Support\Facades\Input;

class Doctor extends Model
{
    
    public function setPhotoAttribute($file){
        if(!is_string($file) && !is_bool($file)) {
            //getting timestamp
            $timestamp = str_replace([' ', ':'], '-', Carbon::now()->toDateTimeString());

            $name = $timestamp . '-' . md5($timestamp);
            $file->move(public_path() . '/images/uploads/', $name);
            $this->attributes['photo'] = '/images/uploads/' . $name;
        }else{
            //if(strpos($file, 'http')){
                $index = strpos($file, 'images');
                if($index)
                    $file = '/'.substr($file, $index);
            //}
            $this->attributes['photo'] = $file;
        }
    }
    
    public function specialty(){
        return $this->belongsTo(Specialty::class);
    }

    public function address(){
        return $this->belongsTo(Address::class);
    }

    public function job(){
        return $this->belongsTo(Job::class);
    }

    public function qualify(){
        return $this->belongsTo(Qualify::class);
    }

    public function getQualify(){
        return $this->qualify->getTitle();
    }

    public function news(){
        return $this->hasMany(News::class);
    }

    public function getName(){
        return $this->attributes["name_".session('locale')];
    }
    public function getDescription(){
        return $this->attributes["description_".session('locale')];
    }
    public function getAddress(){
        return $this->address->getAddress();
    }

    public function previewImage($width = 213, $height = 170){
        $img = md5($this->photo.$width.$height);
        $pointIndex = strrpos($this->photo, '.');
        $type = substr($this->photo, $pointIndex+1);
        if(!in_array($type, ["gif", "jpeg", "png", "wbmp", "xbm"])){
            $type = "jpeg";
        }
        $newImg = public_path().'/images/resize/'.$img.'.'.$type;
        if(!file_exists($newImg)) {
            Image::make($this->photo, array(
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
    public function detailImage($width = 222, $height = 332){
        $img = md5($this->photo.$width.$height);
        $pointIndex = strrpos($this->photo, '.');
        $type = substr($this->photo, $pointIndex+1);
        if(!in_array($type, ["gif", "jpeg", "png", "wbmp", "xbm"])){
            $type = "jpeg";
        }
        $newImg = public_path().'/images/resize/'.$img.'.'.$type;
        if(!file_exists($newImg)) {
            Image::make($this->photo, array(
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
}
