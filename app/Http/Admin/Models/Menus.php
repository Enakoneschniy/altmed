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

class Menus extends Section implements Initializable
{
    /**
     * @var \App\Models\Menu
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
    public function disableCreating(){
        return false;
    }
    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-bars';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Меню сайта';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()
            ->setHtmlAttribute('class', 'table-primary')
            ->setApply(function ($query) {
                $query->orderBy('sort', 'asc');
            })
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::link('title_ru', 'Заголовок(Рус)'),
                AdminColumn::link('title_ua', 'Заголовок(Укр)'),
                AdminColumn::order()
                    ->setLabel('Сортировка')
                    ->setHtmlAttribute('class', 'text-center')
                    ->setWidth('100px')
                //AdminColumn::text('icon', 'Icon')->setWidth('100px')
                //AdminColumn::link('url', 'URL')->setWidth('100px')
            );
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
            AdminFormElement::text('sort', 'Сортировка')->required()
            //AdminFormElement::text('url', 'URL')->required()
        ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('title_ru', 'Заголовок(Рус)')->required(),
            AdminFormElement::text('title_ua', 'Заголовок(Укр)')->required(),
            //AdminFormElement::text('icon', 'Icon')->required()
            //AdminFormElement::text('url', 'URL')->required()
        ]);
    }
    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление пункта меню';
    }
    public function getEditTitle()
    {
        return 'Редактирование пункта меню';
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
        return false;
    }

    public function isCreatable()
    {
        return false;
    }
    /**
     * Переопределение метода содержащего ссылку на редактирование записи
     *
     * @param string|int $id
     *
     * @return string
     */
   /* public function getEditUrl($id)
    {
        return 'Ссылка на страницу редактирования';
    }*/

    /**
     * Переопределение метода содержащего ссылку на удаление записи
     *
     * @param string|int $id
     *
     * @return string
     */
   /* public function getDeleteUrl($id)
    {
        return 'Ссылка на удаление записи';
    }*/
}