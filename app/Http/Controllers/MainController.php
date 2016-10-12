<?php

namespace App\Http\Controllers;

use App\Models\Menu;

use Illuminate\Http\Request;

use App\Http\Requests;

class MainController extends Controller
{

    protected $data = [];


    /**
     * MainController constructor.
     * @param Menu $menu
     */
    public function __construct(Menu $menu){
        //dd(config('app.locale'));
        if(!session('locale')) session(['locale' => 'ru']);
        $this->data['menu'] = $menu->getActiveItems()->toArray();
        $this->data['locales'] = config('app.locales');
    }
}
