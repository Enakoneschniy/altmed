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

    public function getNews(){
        return News::where([
            ['is_home','=', true],
            ['category_id','=', $this->id]
        ])->get();
    }

    public function getConsultCategory(){
        //dd($this->where('icon', 'ico_consult')->first());
        return $this->where('icon', 'ico_consult')->first();
    }

    public function getRootCategories(){
        return $this->where('parent_id', null)->get();
    }
    public function getNewsCategories(){
        $newsCat = $this->where('icon', 'ico_news')->first();
        $newsChildCat = $this->where('parent_id',6)->get();
        return [
            'main_cat' => $newsCat,
            'child_cat' => $newsChildCat
        ];
    }
    public function getForDoctorCategories(){
        $newsCat = $this->where('icon', 'ico_doctors')->first();
        $newsChildCat = $this->where('parent_id', $newsCat->id)->get();
        return [
            'main_cat' => $newsCat,
            'child_cat' => $newsChildCat
        ];
    }


    public function getRootCategoriesHome(){
        return $this->where([
            ['parent_id', '=' , null],
            ['is_home', '=' , true]
        ])->get();
    }

    public function getRootCategoriesService(){
        $res = $this->where([
            ['depth', '=' , 1],
            ['is_home', '=' , false],
            ['icon','!=', '']
        ])->get();
        $arResult = [];
        foreach ($res as $item){
            if($item->parent()->first()->icon == 'ico_service'){
                $arResult[] = $item;
            }
        }
        return $arResult;
    }

    public function getChildrenCategories(){
        return $this->children()->get();
    }

    public function getChildrenHome(){
        $array = $this->children()->get();
        $result = [];
        foreach($array as $cat){
            if($cat->is_home){
                $result[] = $cat;
            }
        }
        return $result;
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
