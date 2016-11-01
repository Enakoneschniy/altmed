<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    public function doctors(){
        $this->hasMany(Doctor::class);
    }
}
