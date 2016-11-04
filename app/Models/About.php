<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    public function getDayFrom(){
        return $this->attributes['day_from_'.session('locale')];
    }
    
    public function getDayTo(){
        return $this->attributes['day_to_'.session('locale')];
    }
    public function getText(){
        return $this->attributes['text_'.session('locale')];
    }
}
