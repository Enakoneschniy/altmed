<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    public $fillable = ['vacancy_id' ,'name', 'phone', 'email', 'content', 'summary'];
    
    public function vacancy(){
        return $this->belongsTo(Vacancy::class);
    }

}
