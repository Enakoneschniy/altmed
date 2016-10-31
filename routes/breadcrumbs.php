<?php
// Home
Breadcrumbs::register('home', function($breadcrumbs)
{
    $breadcrumbs->push('Главня', '/');
});
Breadcrumbs::register('services', function($breadcrumbs, $page)
{
    Breadcrumbs::setView('desktop.breadcrumbs');
    $breadcrumbs->push($page['title'], $page['url']);
});
Breadcrumbs::register('services_category', function($breadcrumbs, $category)
{
    Breadcrumbs::setView('desktop.breadcrumbs');
    $breadcrumbs->parent('services', $category['section']);
    $breadcrumbs->push($category['title'], $category['url']);
});

Breadcrumbs::register('services_detail', function($breadcrumbs, $page)
{
    Breadcrumbs::setView('desktop.breadcrumbs');
    $breadcrumbs->parent('services_category', $page['category']);
    $breadcrumbs->push($page['title'], $page['url']);
});
