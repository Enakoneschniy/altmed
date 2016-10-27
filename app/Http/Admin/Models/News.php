<?php

namespace App\Http\Admin\Models;

use App\Models\Category;
use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use SleepingOwl\Admin\Contracts\Initializable;

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
            ->setFilters(
                AdminDisplayFilter::related('category_id')->setModel(Category::class)
            )
            ->setHtmlAttribute('class', 'table-primary')
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::link('title_ru', 'Заголовок(Рус)')->setWidth('100px'),
                AdminColumn::link('title_ua', 'Заголовок(Укр)')->setWidth('100px'),
                AdminColumn::link('category.title_ru', 'Категория')->setWidth('100px')
            )->paginate(20);
    }

    public function onEdit()
    {
        $tabs = AdminDisplay::tabbed();

        $tabs->setTabs(function ($id) {
            $tabs = [];

            $tabs[] = AdminDisplay::tab(AdminForm::elements([
                AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
                AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Рус)')->required(),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Укр)')->required(),

            ]))->setLabel('Основная информация');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('main_image', 'Картинка для анонса'), // Элемент загрузки картинки
                AdminColumn::image('main_image', 'Картинка для анонса'),
                AdminFormElement::upload('image', 'Детальная картинка'), // Элемент загрузки картинки
                AdminColumn::image('image', 'Детальная картинка')
            ]))->setLabel('Картинки');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('category_id', 'Категория')
                    ->setModelForOptions(Category::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
            ]))->setLabel('Категории');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([

            ]))->setLabel('Галерея');

            return $tabs;
        });
        return AdminForm::panel()
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
                AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
                AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Рус)')->required(),
                AdminFormElement::wysiwyg('text_ru', 'Текст(Укр)')->required(),

            ]))->setLabel('Основная информация');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('main_image', 'Картинка для анонса'), // Элемент загрузки картинки
                AdminColumn::image('main_image', 'Картинка для анонса'),
                AdminFormElement::upload('image', 'Детальная картинка'), // Элемент загрузки картинки
                AdminColumn::image('image', 'Детальная картинка')
            ]))->setLabel('Картинки');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('category_id', 'Категория')
                    ->setModelForOptions(Category::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
            ]))->setLabel('Категории');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::images('gallery', 'Галерея')
            ]))->setLabel('Галерея');

            return $tabs;
        });
        return AdminForm::panel()
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