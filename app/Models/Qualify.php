<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Qualify extends Model
{
    public function doctors(){
        $this->hasMany(Doctor::class);
    }
}
