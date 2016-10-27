<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Baum\Node;
class Category extends Node
{
    public function news(){
        return $this->hasMany(News::class);
    }
}
