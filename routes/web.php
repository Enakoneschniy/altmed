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


//Auth::routes();
$domain = config('app.local_domain');
Route::group(['middleware' => ['web'], 'domain' => "m." . $domain], function () {
    Route::get('/', 'IndexController@mIndex');
// for about-page
    Route::get('about-clinic', "AboutController@mIndex");
    Route::get('/tabs/about', "AboutController@mTabsAbout");
    Route::get('/tabs/respond', "AboutController@mTabsRespond");
    Route::get('feedback', "AboutController@mFeedback");
// modals on layout
    Route::get('/modals/phone', "ModalController@phones");
    Route::get('/modals/search', "ModalController@search");
    Route::get('/modals/share-it', "ModalController@share");
// for for_doctors-page
    Route::get('for-doctors', "DoctorController@mIndex");
    Route::get('tabs/for_doctors/{category}', "DoctorController@mShow");
    Route::get('tabs/vacancies', "DoctorController@mVacancies");
    Route::get('vacancy/{vacancy}', "DoctorController@mVacancy");
//new page
    Route::get('news/', "NewsController@mIndex");
    Route::get('single/{news}', "NewsController@mSingle");
//
    Route::get('service', "ServiceController@mIndex");
    Route::get('consultation', "ConsultationController@mIndex");
    Route::get('schedule', "ScheduleController@mIndex");
    Route::get('prices', "PriceController@mIndex");
    Route::get('contacts', "ContactsController@mIndex");
    Route::get('map', "MapController@mIndex");

    Route::post('/review/create', 'ReviewController@create');
    Route::get('setlocale/{locale}', function ($locale) {
        if (in_array($locale, config('app.locales'))) {   # Проверяем, что у пользователя выбран доступный язык
            config(['app.locale' => $locale]);
            session(['locale' => $locale]); # И устанавливаем его в сессии под именем locale
        }

        return redirect()->back();  # Редиректим его <s>назад</s> на ту же страницу
    });
});



Route::group(['middleware' => ['web'], 'domain' => $domain], function () {
    Route::get('setlocale/{locale}', function ($locale) {
        if (in_array($locale, config('app.locales'))) {   # Проверяем, что у пользователя выбран доступный язык
            //config(['app.locale' => $locale]);
            app()->setLocale($locale);
            session(['locale' => $locale]); # И устанавливаем его в сессии под именем locale
        }

        return redirect()->back();  # Редиректим его <s>назад</s> на ту же страницу
    });
    Route::post('/review/create', 'ReviewController@create');
    Route::post('/question/create', 'ReviewController@question');
    Route::get('/', 'IndexController@index');

    Route::get('about-clinic', "AboutController@index");
    Route::group(['prefix' => 'service'], function(){
        Route::get('/', "ServiceController@index");
        Route::get('/{category}/{post}', "ServiceController@detail");
    });
    Route::group(['prefix' => 'consultation'], function() {
        Route::get('/', "ConsultationController@index");
        Route::get('/{job}/{doc}', "ConsultationController@detail");
    });
    Route::group(['prefix' => 'for-doctors'], function() {
        Route::get('/', "DoctorController@index");
        Route::get('/{category}/{post}', "DoctorController@detail");
    });
    Route::group(['prefix' => 'news'], function() {
        Route::get('/', "NewsController@index");
        Route::get('/{category}/{post}', "NewsController@detail");
    });

    Route::get('schedule', "ScheduleController@index");
    Route::get('prices', "PriceController@index");


    Route::get('contacts', "ContactsController@index");
    Route::get('map', "MapController@index");

    Route::post('/review/create', 'ReviewController@create');
    Route::post('/question', 'ReviewController@questionCreate');
});
