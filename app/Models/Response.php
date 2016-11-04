<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{

    public function vacancy(){
        return $this->belongsTo(Vacancy::class);
    }

}
