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

class Phones extends Section implements Initializable
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
        //$this->addToNavigation($priority = 9);

        $this->creating(function($config, \Illuminate\Database\Eloquent\Model $model) {

        });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-phone';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Номера телефонов';
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
                AdminColumn::link('title', 'Оператор'),
                AdminColumn::link('phone', 'Номер телефона'),
                AdminColumnEditable::checkbox('active')->setLabel('Отображается')
            )->paginate(20);
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('title', 'Оператор')->required(),
            AdminFormElement::text('phone', 'Номер телефона')->required(),
            AdminFormElement::checkbox('active', 'Отображать на сайте'),
        ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('title', 'Оператор')->required(),
            AdminFormElement::text('phone', 'Номер телефона')->required(),
            AdminFormElement::checkbox('active', 'Отображать на сайте'),
        ]);
    }

    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление номера телефона';
    }
    public function getEditTitle()
    {
        return 'Редактирование номера телефона';
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