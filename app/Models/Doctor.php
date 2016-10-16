<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    public function specialty(){
        return $this->belongsTo(Specialty::class);
    }

    public function address(){
        return $this->belongsTo(Address::class);
    }

    public function job(){
        return $this->belongsTo(Job::class);
    }

    public function qualify(){
        return $this->belongsTo(Qualify::class);
    }
}
