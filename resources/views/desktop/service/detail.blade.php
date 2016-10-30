@extends('layouts.app')

@section('content')
    <div class="row ">
        <div class="line_crumbs">
            <div class="col3">
                <a href="#" class="line_crumbs_back">Назад</a>
            </div>
            <div class="col12">
                <ul class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <li class="breadcrumbs_i" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="#" class="breadcrumbs_link" itemprop="item">
                            <span class="breadcrumbs_title" itemprop="name">Новости</span>
                        </a>
                    </li>
                    <li class="breadcrumbs_i" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="#" class="breadcrumbs_link" itemprop="item">
                            <span class="breadcrumbs_title" itemprop="name">Стать</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row ">
        <div class="col3">&nbsp;</div>
        <div class="col12">
            <div class="article">
                <div class="col4">
                    <div class="column1">
                        <div class="img">
                            <img src="{{$post->detailImage()}}" alt="">
                        </div>
                    </div>
                </div>
                <div class="col11">
                    <article class="column2">
                        <h1>{{$post->getFullTitle()}}</h1>
                        <city>
                            Автор статьи: <span href="#" class="person">{{$post->doctor->getName()}}</span>
                        </city>
                        <div class="panel_social"></div>
                        {!! $post->getFullText() !!}
                        <div class="panel_social"></div>
                    </article>
                </div>
            </div>
        </div>
    </div>
@endsection