<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public function doctors(){
        return $this->hasMany(Doctor::class);
    }
    public function getAddress(){
        return $this->attributes['address_'.session('locale')];
    }
    public function getCity(){
        return $this->attributes['city_'.session('locale')];
    }
}
