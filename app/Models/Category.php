<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Baum\Node;
class Category extends Node
{
    protected $orderColumn = 'title_ru';

    public function news(){
        return $this->hasMany(News::class);
    }
    public function getRootCategories(){
        return $this->where('parent_id', null)->get();
    }
    public function getChildrenCategories(){
        return $this->children()->get();
    }

    public function getTitle(){
        return $this->attributes['title_'.session('locale')];
    }

    /**
     * @return mixed
     */
    public function getDoctorCategories(){
        return $this->where('icon', 'ico_doctors')->get();//icon не будет менятся. он жестко забит в бд/ok
    }
}
