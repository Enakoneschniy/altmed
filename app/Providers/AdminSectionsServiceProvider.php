<?php

namespace App\Providers;

use App\Http\Admin\Models\Doctors;
use App\Http\Admin\Models\Jobs;
use App\Http\Admin\Models\Qualifies;
use App\Http\Admin\Models\Roles;
use App\Http\Admin\Models\Specialties;
use App\Http\Admin\Models\Users;
use SleepingOwl\Admin\Providers\AdminSectionsServiceProvider as ServiceProvider;

use SleepingOwl\Admin\Navigation\Page;
use AdminNavigation;
class AdminSectionsServiceProvider extends ServiceProvider
{

    /**
     * @var array
     */
    protected $sections = [
        \App\User::class => 'App\Http\Admin\Models\Users',
        \App\Models\Role::class => 'App\Http\Admin\Models\Roles',
        \App\Models\Menu::class => 'App\Http\Admin\Models\Menus',
        \App\Models\Doctor::class => 'App\Http\Admin\Models\Doctors',
        \App\Models\Job::class => 'App\Http\Admin\Models\Jobs',
        \App\Models\Specialty::class => 'App\Http\Admin\Models\Specialties',
        \App\Models\Qualify::class => 'App\Http\Admin\Models\Qualifies',
    ];

    /**
     * Register sections.
     *
     * @return void
     */
    public function boot(\SleepingOwl\Admin\Admin $admin)
    {
    	//

        parent::boot($admin);
        AdminNavigation::addPage("Пользователи")->setPages(function(Page $section){
            $section
                ->addPage(Users::class)
                ->setTitle('Список пользователей')
                ->setUrl('admin/users')
                ->setIcon('fa fa-user');
            $section
                ->addPage(Roles::class)
                ->setTitle('Роли')
                ->setUrl('admin/roles')
                ->setIcon('fa fa-users');
        })->setIcon('fa fa-users');

        AdminNavigation::addPage("Персонал")->setPages(function(Page $section){
            $section
                ->addPage(Doctors::class)
                ->setTitle('Врачи')
                ->setUrl('admin/doctors')
                ->setIcon('fa fa-user-md');
            $section
                ->addPage(Qualifies::class)
                ->setTitle('Квалификации')
                ->setUrl('admin/qualifies')
                ->setIcon('fa fa-stethoscope');
            $section
                ->addPage(Specialties::class)
                ->setTitle('Специализации')
                ->setUrl('admin/specialties')
                ->setIcon('fa fa-university');
            $section
                ->addPage(Jobs::class)
                ->setTitle('Должности')
                ->setUrl('admin/jobs')
                ->setIcon('fa fa-hospital-o');
        })->setIcon('fa fa-hospital-o');

        /*$this->registerNRoutes();
        $this->registerNavigation();
        $this->registerMediaPackages();*/
    }
}
