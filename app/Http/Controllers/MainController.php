<?php

namespace App\Http\Controllers;

use App\Models\Menu;

use App\Models\Phone;
use Illuminate\Http\Request;

use App\Http\Requests;

class MainController extends Controller
{
    protected $data = [];


    /**
     * MainController constructor.
     * @param Menu $menu
     * @param Phone $phone
     */
    public function __construct(Menu $menu, Phone $phone){
        //dd(config('app.locale'));
        if(!session('locale')) session(['locale' => 'ru']);
        config(['app.locale' => session('locale')]);
        app()->setLocale(session('locale'));
        $this->data['menu'] = $menu->getActiveItems()->toArray();
        $this->data['phones'] = $phone->where('active', true)->get();
        $this->data['locales'] = config('app.locales');
    }
}
