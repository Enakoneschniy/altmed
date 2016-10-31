<?php

namespace App\Http\Admin\Models;

use App\Models\Category;
use App\Models\Doctor;
use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use AdminColumnEditable;
use AdminDisplayFilter;
use SleepingOwl\Admin\Contracts\Initializable;
use SleepingOwl\Admin\Model\ModelConfiguration;

class News extends Section implements Initializable
{
    /**
     * @var \App\Models\Job
     */
    protected $model;

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        /*$this->addToNavigation($priority = 3, function() {
            return \App\Models\Category::count();
        });*/

        $this->creating(function($config, \Illuminate\Database\Eloquent\Model $model) {

        });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-list-alt';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Список новостей';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()
            ->setHtmlAttribute('class', 'table-primary')
            ->setFilters([
                AdminDisplayFilter::field('category_id')->setTitle('Category ID [:value]'),
            ])
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::link('title_ru', 'Заголовок(Рус)'),
                AdminColumn::link('title_ua', 'Заголовок(Укр)'),
                AdminColumn::link('category.title_ru', 'Категория'),
                AdminColumnEditable::checkbox('published')->setLabel('Опубликована'),
                AdminColumnEditable::checkbox('is_home')->setLabel('На главной')
            )->paginate(20);
    }

    private function getFormatCategories($categories){
        //dd($categories);
        $categoriesText = [];
        foreach ($categories as $category) {
            //$categoriesText[] = str_repeat('.',$category->depth).$category->title_ru;
            $children = $category->children()->get();
            //dd($children);
            if(count($children) > 0){
                $categoriesText[] = str_repeat(' - ',$category->depth).$category->title_ru;
                $temp = $this->getFormatCategories($children);
                foreach ($temp as $key => $item){
                    $categoriesText[$key] = $item;
                }
            }else{
                $categoriesText[$category->id] = str_repeat(' - ',$category->depth).$category->title_ru;
            }
        }
        return $categoriesText;
    }

    public function onEdit()
    {
        $tabs = AdminDisplay::tabbed();

        $tabs->setTabs(function ($id) {
            $tabs = [];

            $tabs[] = AdminDisplay::tab(AdminForm::elements([
                AdminFormElement::checkbox('published', 'Опубликовать'),
                AdminFormElement::checkbox('is_home', 'Показывать на главной'),
                AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
                AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
                AdminFormElement::select('doctor_id', 'Врач')
                    ->setModelForOptions(Doctor::class)
                    ->setDisplay(function($option) {
                        return "{$option->name_ru}";
                    })->setSortable(false),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Рус)')->required(),
                AdminFormElement::wysiwyg('text_ua', 'Текст(Укр)')->required(),

            ]))->setLabel('Основная информация');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('main_image', 'Картинка для анонса'), // Элемент загрузки картинки
                AdminColumn::image('main_image', 'Картинка для анонса')->setWidth(213),
                AdminFormElement::upload('image', 'Детальная картинка'), // Элемент загрузки картинки
                AdminColumn::image('image', 'Детальная картинка')->setWidth(213)
            ]))->setLabel('Картинки');
            $categories = Category::where('parent_id', null)->get();
            $categoriesText = $this->getFormatCategories($categories);
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('category_id', 'Категория', $categoriesText)->setSortable(false),
            ]))->setLabel('Категории');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::images('gallery', 'Галерея')
            ]))->setLabel('Галерея');

            return $tabs;
        });
        return AdminForm::panel()->setHtmlAttribute('enctype', 'multipart/form-data')
            ->addHeader([
                $tabs
            ]);
    }


    public function onCreate()
    {
        $tabs = AdminDisplay::tabbed();

        $tabs->setTabs(function ($id) {
            $tabs = [];

            $tabs[] = AdminDisplay::tab(AdminForm::elements([
                AdminFormElement::checkbox('published', 'Опубликовать'),
                AdminFormElement::checkbox('is_home', 'Показывать на главной'),
                AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
                AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
                AdminFormElement::select('doctor_id', 'Врач')
                    ->setModelForOptions(Doctor::class)
                    ->setDisplay(function($option) {
                        return "{$option->name_ru}";
                    })->setSortable(false),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Рус)')->required(),
                AdminFormElement::wysiwyg('text_ua', 'Текст(Укр)')->required(),

            ]))->setLabel('Основная информация');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('main_image', 'Картинка для анонса'), // Элемент загрузки картинки
                AdminColumn::image('main_image', 'Картинка для анонса')->setWidth(213),
                AdminFormElement::upload('image', 'Детальная картинка'), // Элемент загрузки картинки
                AdminColumn::image('image', 'Детальная картинка')->setWidth(213)
            ]))->setLabel('Картинки');
            $categories = Category::where('parent_id', null)->get();
            $categoriesText = $this->getFormatCategories($categories);
            //dd($categoriesText);
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('category_id', 'Категория', $categoriesText)->setSortable(false),
            ]))->setLabel('Категории');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::images('gallery', 'Галерея')
            ]))->setLabel('Галерея');

            return $tabs;
        });
        return AdminForm::panel()->setHtmlAttribute('enctype', 'multipart/form-data')
            ->addHeader([
                $tabs
            ]);
    }

    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление новости';
    }
    public function getEditTitle()
    {
        return 'Редактирование новости';
    }
}