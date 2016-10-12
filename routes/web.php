<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Auth::routes();

//Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'IndexController@index');

    Route::get('about-clinic', "AboutController@index");
    Route::get('service', "ServiceController@index");
    Route::get('consultation', "ConsultationController@index");
    Route::get('schedule', "ScheduleController@index");
    Route::get('prices', "PriceController@index");
    Route::get('news', "NewsController@index");
    Route::get('for-doctors', "DoctorController@index");
    Route::get('contacts', "ContactsController@index");
    Route::get('map', "MapController@index");

    Route::post('/review/create', 'ReviewController@create');

    Route::get('setlocale/{locale}', function ($locale) {
        if (in_array($locale, config('app.locales'))) {   # Проверяем, что у пользователя выбран доступный язык
            session(['locale' => $locale]); # И устанавливаем его в сессии под именем locale
        }

        return redirect()->back();  # Редиректим его <s>назад</s> на ту же страницу
    });

    Route::get('/home', 'HomeController@index');
//});
