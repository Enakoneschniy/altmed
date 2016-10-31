<?php

Route::get('', ['as' => 'admin.dashboard', 'uses' => '\App\Http\Controllers\HomeController@dashboard']);

Route::get('/information', ['as' => 'admin.information', function () {
    $content = 'Define your information here.';
    return AdminSection::view($content, 'Information');
}]);


Route::get('login', ['as' => 'auth.login', 'uses' => '\App\Http\Controllers\Auth\LoginController@showLoginForm']);
Route::post('login', ['as' => 'auth.login', 'uses' => '\App\Http\Controllers\Auth\LoginController@login']);
Route::get('logout', ['as' => 'auth.logout', 'uses' => '\App\Http\Controllers\Auth\LoginController@logout']);
