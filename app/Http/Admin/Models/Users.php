<?php

namespace App\Http\Admin\Models;

use App\Models\Role;
use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Section;
use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use SleepingOwl\Admin\Contracts\Initializable;

class Users extends Section implements Initializable
{
    /**
     * @var bool
     */
    protected $checkAccess = false;

    /**
     * @var string
     */
    protected $title;

    /**
     * @var string
     */
    protected $alias;

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()->with('roles')
            ->setHtmlAttribute('class', 'table-primary')
            ->setColumns(
                AdminColumn::text('id', '#')->setWidth('30px'),
                AdminColumn::link('name', 'Имя')->setWidth('100px'),
                AdminColumn::email('email', 'E-mail'),
                AdminColumn::text('roles.title', 'Роль')
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
            AdminFormElement::text('name', 'Имя')->required(),
            AdminFormElement::text('email', 'Email')->required(),
            AdminFormElement::multiselect('roles', 'Роль')
                ->setModelForOptions(Role::class)
                ->setDisplay(function($option) {
                    return "{$option->title}";
                })->required()
        ]);
    }

    public function setRolesAttribute($roles){
        $this->roles()->detach();
        if ( ! $roles) return;
        if ( ! $this->exists) $this->save();

        $this->roles()->attach($roles);
    }

    /**
     * @return FormInterface
     */
    public function onCreate()
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('name', 'Имя')->required(),
            AdminFormElement::text('email', 'Email')->required(),
            AdminFormElement::password('password', 'Пароль')->required(),
            AdminFormElement::multiselect('roles', 'Роль')
                ->setModelForOptions(Role::class)
                ->setDisplay(function($option) {
                    return "{$option->title}";
                })->required()
        ]);
    }

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        /*$this->addToNavigation($priority = 2, function() {
            return \App\User::count();
        });*/
    }

    public function getTitle()
    {
        return 'Пользователи';
    }

    public function getEditTitle(){
        return "Редактирование позьзователя";
    }

    public function getCreateTitle()
    {
        return 'Добавление пользователя';
    }
    public function getIcon(){
        return "fa fa-user";
    }
}
