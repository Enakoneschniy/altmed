@extends('layouts.mobile')
@section('content')

<!-- MAIN CONTENT -->
<main class="main">
    <div class="breadcrumbs">
        <ul>
            <li><a href="/for-doctors">{{ trans('for_doctors.vacancies') }}</a></li>
            <li><span>{{ $vacancy['title_' . session('locale')] }}</span></li>
        </ul>
    </div>

    <div class="container__inner vacancy--container">
        <h2 class="vacancy-name-row">
            {{ $vacancy['title_' . session('locale')] }}
        </h2>
    </div>
    <div class="vacancy--container ">
        <div class="wrap-img wrap-img--wide">
            <img src="{{ $vacancy['image'] }}" alt="">
            <a href="#" data-toggle="modal" data-target="#modal" data-link="ajax/modals/social.html"
               class="social-share">Поделиться</a>
        </div>
        <div class="vacancy-text">
            <p>
                {{ $vacancy['description_' . session('locale')] }}
            </p>
        </div>
        <a href="/vacancy-form/{{ $vacancy['id'] }}" class="waves-effect waves-light btn send-cv">
            Заполнить анкету
        </a>
    </div>
</main>
<!-- END MAIN CONTENT -->
@stop