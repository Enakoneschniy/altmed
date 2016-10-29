<?php

namespace App\Models;

use Carbon\Carbon;
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
}
