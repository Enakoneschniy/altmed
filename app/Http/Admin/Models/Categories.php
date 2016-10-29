<?php

namespace App\Http\Admin\Models;

use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use SleepingOwl\Admin\Contracts\Initializable;

class Categories extends Section implements Initializable
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
        return 'fa fa-folder';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Категории';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::tree()->setValue('title_ru');
        /*return AdminDisplay::table()
            ->setHtmlAttribute('class', 'table-primary')
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::link('title_ru', 'Заголовок(Рус)')->setWidth('100px'),
                AdminColumn::link('title_ua', 'Заголовок(Укр)')->setWidth('100px')
            )->paginate(20);*/
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
            AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
        ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
            AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required()
        ]);
    }

    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление категории';
    }
    public function getEditTitle()
    {
        return 'Редактирование категории';
    }
}