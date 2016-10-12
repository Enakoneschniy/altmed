<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $attributes = ['title_ru', 'title_ua', 'url', 'sort', 'active'];
    
    public function getActiveItems(){
        return $this->active()->orderBy('sort', 'ASC')->get();
    }
    
    public function scopeActive($query){
        $query->where('active', 1);
    }
}
