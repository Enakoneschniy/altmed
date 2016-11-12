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

class Addresses extends Section implements Initializable
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
        //$this->addToNavigation($priority = 4);

        $this->creating(function($config, \Illuminate\Database\Eloquent\Model $model) {

        });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-map-marker';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Адреса клиник';
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
                AdminColumn::link('city_ru', 'Город(Рус)')->setWidth('100px'),
                AdminColumn::link('city_ua', 'Город(Укр)')->setWidth('100px'),
                AdminColumn::link('address_ru', 'Адрес(Рус)')->setWidth('100px'),
                AdminColumn::link('address_ua', 'Адрес(Укр)')->setWidth('100px')
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
            AdminFormElement::text('city_ru', 'Город(Рус)')->required(),
            AdminFormElement::text('city_ua', 'Город(Укр)')->required(),
            AdminFormElement::text('address_ru', 'Адрес(Рус)')->required(),
            AdminFormElement::text('address_ua', 'Адрес(Укр)')->required(),
        ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('city_ru', 'Город(Рус)')->required(),
            AdminFormElement::text('city_ua', 'Город(Укр)')->required(),
            AdminFormElement::text('address_ru', 'Адрес(Рус)')->required(),
            AdminFormElement::text('address_ua', 'Адрес(Укр)')->required(),
        ]);
    }

    /**
     * Переопределение метода содержащего заголовок создания записи
     *
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getCreateTitle()
    {
        return 'Добавление адреса';
    }
    public function getEditTitle()
    {
        return 'Редактирование адреса';
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