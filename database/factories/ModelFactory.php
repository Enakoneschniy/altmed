<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});
$factory->define(App\Models\News::class, function (Faker\Generator $faker) {
    $gallery = [];
    for ($i = 0; $i < 4; $i++){
        $gallery[] =  $faker->image(public_path()."/images/uploads", 640, 470, 'cats', true, true, 'Faker');
    }
    $array = [8, 9, 10, 11, 12, 15, 16, 17, 20, 21, 23, 26, 27, 28, 29, 30, 31];
    $arrText = $faker->paragraphs(6);
    $text = '';
    foreach($arrText as $key =>  $item){
        if($key == 2){
            $text .=  '<p>'.$item.'</p>[gallery]';
        }else{
            $text .=  '<p>'.$item.'</p>';
        }
    }
    return [
        'title_ru' => $faker->sentence(3, true),
        'title_ua' => $faker->sentence(3, true),
        'published' => $faker->boolean(100),
        'text_ru' => $text,
        'text_ua' => $text,
        'image' => $faker->image(public_path()."/images/uploads/news/detail", 218, 217, 'cats', true, true, 'Faker'),
        'main_image' => $faker->image(public_path()."/images/uploads/news/detail", 213, 170, 'cats', true, true, 'Faker'),
        'gallery' => $gallery,
        'category_id' => $array[rand(0, count($array) - 1)],
        'doctor_id' => 1,
        'is_home' => $faker->boolean(50)
    ];
});
