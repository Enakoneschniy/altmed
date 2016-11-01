<?php

namespace App\Http\Admin\Models;

use App\Models\Address;
use App\Models\Job;
use App\Models\Qualify;
use App\Models\Specialty;
use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use SleepingOwl\Admin\Contracts\Initializable;

class Doctors extends Section implements Initializable
{

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        /*$this->addToNavigation($priority = 5, function() {
            return \App\Models\Doctor::count();
        });*/
        $this->creating(function($config, \Illuminate\Database\Eloquent\Model $model) {

        });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-user-md';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Врачи';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()->with(['job', 'qualify', 'address', 'specialty'])
            ->setHtmlAttribute('class', 'table-primary')
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::image('photo', 'Фото')->setWidth('100px'),
                AdminColumn::link('name_ru', 'ФИО(Рус)'),
                AdminColumn::link('name_ua', 'ФИО(Укр)'),
                AdminColumn::email('email', 'E-mail'),
                AdminColumn::text('description_ru', 'Описание(Рус)'),
                AdminColumn::text('description_ua', 'Описание(Укр)')
            )->paginate(20);
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        $tabs = AdminDisplay::tabbed();

        $tabs->setTabs(function ($id) {
            $tabs = [];

            $tabs[] = AdminDisplay::tab(AdminForm::elements([
                AdminFormElement::checkbox('active', 'Опубликовать')->required(),
                AdminFormElement::text('name_ru', 'ФИО(Рус)')->required(),
                AdminFormElement::text('name_ua', 'ФИО(Укр)')->required(),
                AdminFormElement::text('email', 'E-mail')->required(),
                AdminFormElement::select('address_id', 'Адрес клиники')
                    ->setModelForOptions(Address::class)
                    ->setDisplay(function($option) {
                        return "{$option->address_ru} ({$option->address_ua})";
                    })->required(),
                AdminFormElement::wysiwyg('description_ru', 'Описание(Рус)')->required(),
                AdminFormElement::wysiwyg('description_ua', 'Описание(Укр)')->required(),

            ]))->setLabel('Персональные данные');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('photo', 'Image'), // Элемент загрузки картинки
                AdminColumn::image('photo', 'Image')
            ]))->setLabel('Фото');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('specialty_id', 'Специализация')
                    ->setModelForOptions(Specialty::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
                AdminFormElement::select('job_id', 'Должность')
                    ->setModelForOptions(Job::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
                AdminFormElement::select('qualify_id', 'Квалификация')
                    ->setModelForOptions(Qualify::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
            ]))->setLabel('Профессиональные данные');

            return $tabs;
        });
        return AdminForm::panel()->setHtmlAttribute('enctype', 'multipart/form-data')
            ->addHeader([
                $tabs
            ]);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        $tabs = AdminDisplay::tabbed();

        $tabs->setTabs(function ($id) {
            $tabs = [];

            $tabs[] = AdminDisplay::tab(AdminForm::elements([
                AdminFormElement::checkbox('active', 'Опубликовать'),
                AdminFormElement::text('name_ru', 'ФИО(Рус)')->required(),
                AdminFormElement::text('name_ua', 'ФИО(Укр)')->required(),
                AdminFormElement::text('email', 'E-mail')->required(),
                AdminFormElement::select('address_id', 'Адрес клиники')
                    ->setModelForOptions(Address::class)
                    ->setDisplay(function($option) {
                        return "{$option->address_ru} ({$option->address_ua})";
                    })->required(),
                AdminFormElement::wysiwyg('description_ru', 'Описание(Рус)')->required(),
                AdminFormElement::wysiwyg('description_ua', 'Описание(Укр)')->required(),

            ]))->setLabel('Персональные данные');

            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::upload('photo', 'Image'), // Элемент загрузки картинки
                AdminColumn::image('photo', 'Image')
            ]))->setLabel('Фото');
            $tabs[] = AdminDisplay::tab(new \SleepingOwl\Admin\Form\FormElements([
                AdminFormElement::select('specialty_id', 'Специализация')
                    ->setModelForOptions(Specialty::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
                AdminFormElement::select('job_id', 'Должность')
                    ->setModelForOptions(Job::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
                AdminFormElement::select('qualify_id', 'Квалификация')
                    ->setModelForOptions(Qualify::class)
                    ->setDisplay(function($option) {
                        return "{$option->title_ru}";
                    })->required(),
            ]))->setLabel('Профессиональные данные');

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
        return 'Добавление врача';
    }
    public function getEditTitle()
    {
        return 'Редактирование врача';
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