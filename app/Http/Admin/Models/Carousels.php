<?php

namespace App\Http\Admin\Models;

use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use AdminColumnEditable;
use SleepingOwl\Admin\Contracts\Initializable;

class Carousels extends Section implements Initializable
{
    /**
     * @var \App\Models\Address
     */
    protected $model;

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        $this->addToNavigation($priority = 1);

        $this->creating(function($config, \Illuminate\Database\Eloquent\Model $model) {

        });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-picture-o';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Карусель на главной';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()
            ->setHtmlAttribute('class', 'table-primary')
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::image('image', 'Картинка')->setWidth('213px'),
                AdminColumn::link('title_ru', 'Название(Рус)'),
                AdminColumn::link('title_ua', 'Название(Укр)'),
                AdminColumnEditable::checkbox('published')->setLabel('Опубликована')
            )->paginate(20);
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        return AdminForm::panel()->setHtmlAttribute('enctype', 'multipart/form-data')->addBody(array(
            AdminFormElement::checkbox('published', 'Опубликовать'),
            AdminColumn::image('image', 'Картинка')->setWidth('213px'),
            AdminFormElement::upload('image', 'Картинка'), // Элемент загрузки картинки
            AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
            AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
            AdminFormElement::text('link', 'Ссылка(Подробнее...)'),
            AdminFormElement::select('news_id', 'Ссылка на новость')
                ->setModelForOptions(\App\Models\News::class)
                ->setDisplay(function($option) {
                    return "{$option->title_ru}";
                }),
            AdminFormElement::wysiwyg('text_ru', 'Описание(Рус)')->required(),
            AdminFormElement::wysiwyg('text_ua', 'Описание(Укр)')->required(),

        ));
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->setHtmlAttribute('enctype', 'multipart/form-data')->addBody(array(
            AdminFormElement::checkbox('published', 'Опубликовать'),
            AdminColumn::image('image', 'Картинка')->setWidth('213px'),
            AdminFormElement::upload('image', 'Картинка'), // Элемент загрузки картинки
            AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
            AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
            AdminFormElement::text('link', 'Ссылка(Подробнее...)'),
            AdminFormElement::select('news_id', 'Ссылка на новость')
                ->setModelForOptions(\App\Models\News::class)
                ->setDisplay(function($option) {
                    return "{$option->title_ru}";
                }),
            AdminFormElement::wysiwyg('text_ru', 'Описание(Рус)')->required(),
            AdminFormElement::wysiwyg('text_ua', 'Описание(Укр)')->required(),

        ));
    }

    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление слайда';
    }
    public function getEditTitle()
    {
        return 'Редактирование слайда';
    }

    /**
     * Переопределение метода для запрета удаления записи
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return bool
     */
    public function isDeletable(\Illuminate\Database\Eloquent\Model $model)
    {
        return true;
    }
}