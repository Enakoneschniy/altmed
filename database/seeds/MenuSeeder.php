<?php

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            [
                'title_ru' => 'Главная',
                'title_ua' => 'Головна',
                'url' => '/',
                'sort' => 1,
                'active' => true,
                'icon' => ""
            ],
            [
                'title_ru' => 'О клинике',
                'title_ua' => 'Про клініку',
                'url' => '/about-clinic',
                'sort' => 2,
                'active' => true,
                'icon' => 'item-about'
            ],
            [
                'title_ru' => 'Услуги',
                'title_ua' => 'Послуги',
                'url' => '/service',
                'sort' => 3,
                'active' => true,
                'icon' => 'item-service'
            ],
            [
                'title_ru' => 'Консультация',
                'title_ua' => 'Консультація',
                'url' => '/consultation',
                'sort' => 4,
                'active' => true,
                'icon' => 'item-consult'
            ],
            [
                'title_ru' => 'Расписание',
                'title_ua' => 'Розклад',
                'url' => '/schedule',
                'sort' => 5,
                'active' => true,
                'icon' => 'item-table'
            ],
            [
                'title_ru' => 'Цены',
                'title_ua' => 'Ціни',
                'url' => '/prices',
                'sort' => 6,
                'active' => true,
                'icon' => ""
            ],
            [
                'title_ru' => 'Новости',
                'title_ua' => 'Новини',
                'url' => '/news',
                'sort' => 7,
                'active' => true,
                'icon' => 'item-news'
            ],
            [
                'title_ru' => 'Для врачей',
                'title_ua' => 'Для лікарів',
                'url' => '/for-doctors',
                'sort' => 8,
                'active' => true,
                'icon' => 'item-doctors'
            ],
            [
                'title_ru' => 'Контакты',
                'title_ua' => 'Контакти',
                'url' => '/contacts',
                'sort' => 9,
                'active' => true,
                'icon' => 'item-contacts'
            ],
            [
                'title_ru' => 'Карта',
                'title_ua' => 'Мапа',
                'url' => '/map',
                'sort' => 10,
                'active' => true,
                'icon' => 'item-maps'
            ]
        ]);
    }
}
