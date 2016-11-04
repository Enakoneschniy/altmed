<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Review extends Model
{
    protected $fillable = ['type_id', 'name', 'email', 'content', 'phone', 'active'];
    
    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->format('d.m.Y H:m');
    } 
    
    public function getActiveItems(){
        return $this->latest()->active()->get();
    }
    
    public function getActiveReviews(){
        return $this->latest()->active()->review()->paginate(2);
    }
    
    public function scopeReview($query){
        return $query->where('type_id', 3);    
    }
    
    public function scopeActive($query){
       return $query->where('active', 1);
    }

    public function getNameAttribute($value){
        return $value;
    }

}
