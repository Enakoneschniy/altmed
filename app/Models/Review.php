<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['name', 'email', 'content', 'active'];

    public function getActiveItems(){
        return $this->latest()->active()->get();
    }

    public function scopeActive($query){
       return $query->where('active', 1);
    }

    public function getNameAttribute($value){
        return $value;
    }

}
