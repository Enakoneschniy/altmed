@extends('layouts.app')

@section('content')
<div class="row ">
    <div class="line_crumbs">
        <div class="col3">
            <a href="#" onClick="window.history.back()" class="line_crumbs_back">Назад</a>
        </div>
        <div class="col12">
            {!! Breadcrumbs::render('services_detail', $pages) !!}
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
                        <img src="{{$doctor->detailImage()}}" alt="">
                    </div>
                    <div class="adress">
                        <div class="img">
                            <i class="ico_local sprites"></i>
                        </div>
                        <p>{{$doctor->getAddress()}}</p>
                    </div>
                </div>
            </div>
            <div class="col11">
                <div class="column2">
                    <h1>{{$doctor->getName()}}</h1>
                    <div class="panel_social"></div>
                    <div class="description">
                        <p>{!!$doctor->getDescription()!!}</p>
                    </div>
                    <a href="#?" class="btn btn_style1 btn_1" data-wipe="@lang('index.add_diagnostic')">@lang('index.add_diagnostic')</a>
                    <a href="#?" class="btn btn_style1 btn_1 question-doctor" data-wipe="@lang('about.question')">@lang('about.question')</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection