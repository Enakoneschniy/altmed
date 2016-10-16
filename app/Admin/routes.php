<?php
Route::get('', ['as' => 'admin.dashboard', function () {
	$content = 'Define your dashboard here.';
	return AdminSection::view($content, 'Dashboard');
}]);

Route::get('information', ['as' => 'admin.information', function () {
	$content = 'Define your information here.';
	return AdminSection::view($content, 'Information');
}]);

Route::get('login', ['as' => 'auth.login', 'uses' => '\App\Http\Controllers\Auth\LoginController@showLoginForm']);
Route::post('login', ['as' => 'auth.login', 'uses' => '\App\Http\Controllers\Auth\LoginController@login']);
Route::get('logout', ['as' => 'auth.logout', 'uses' => '\App\Http\Controllers\Auth\LoginController@logout']);
