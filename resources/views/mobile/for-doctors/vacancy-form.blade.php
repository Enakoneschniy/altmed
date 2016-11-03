@extends('layouts.mobile')
@section('content')

        <!-- MAIN CONTENT -->
<main class="main">
    <div class="breadcrumbs">
        <ul>
            <li><a href="/for-doctors">{{ trans('for_doctors.vacancies') }}</a></li>
            <li><a href="/vacancy/{{ $current_vacancy['id'] }}">{{ $current_vacancy['title_'.session('locale')] }}</a></li>
            <li><span>Анкета</span></li>
        </ul>
    </div>
    <div class="container vacancy-form__wrap">
        <div class="container__inner">
            {!! Form::open(['class' => 'vacancy-form', 'url' => '/response/create', 'enctype' => 'multipart/form-data']) !!}
            <div class="filters-wrap">
                <div class="select-row {{ $errors->has('vacancy_id') ? ' has-error' : '' }}">
                    <select class="md-select vacancy-form-select" name="vacancy_id" id="">
                        @foreach($vacancies as $vacancy)
                            <option value="{{ $vacancy['id'] }}" {{ $current_vacancy['title_'.session('locale')] == $vacancy['title_'.session('locale')] ? 'selected' : '' }}>{{ $vacancy['title_'.session('locale')] }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('name'))
                        <span class="help-block">
                        <strong>{{ $errors->first('vacancy_id') }}</strong>
                    </span>
                    @endif
                </div>
            </div>

            <div class="input-row {{ $errors->has('name') ? ' has-error' : '' }}">
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('review.name')]) !!}
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>
            <div class="input-row {{ $errors->has('phone') ? ' has-error' : '' }}">
                {!! Form::text('phone', null, ['class' => 'form-control', 'placeholder' => '380', 'id' => 'phone']) !!}
                @if ($errors->has('phone'))
                    <span class="help-block">
                        <strong>{{ $errors->first('phone') }}</strong>
                    </span>
                @endif
            </div>
            <div class="input-row {{ $errors->has('email') ? ' has-error' : '' }}">
                {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => trans('review.email')]) !!}
                @if ($errors->has('email'))
                    <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>
            <div class="input-row {{ $errors->has('content') ? ' has-error' : '' }}">
                {!! Form::textarea('content', null, ['class' => 'form-control no-size', 'placeholder' => trans('review.content')]) !!}
                @if ($errors->has('content'))
                    <span class="help-block">
            <strong>{{ $errors->first('content') }}</strong>
                        </span>
                @endif
                <div class="input-row {{ $errors->has('summary') ? ' has-error' : '' }}">
                    {!! Form::file('summary', ['class' => 'file-loader']) !!}
                    @if ($errors->has('summary'))
                        <span class="help-block">
                    <strong>{{ $errors->first('summary') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="input-row">
                    <div class="captcha">
                        <img src="img/captcha.png" alt="">
                    </div>
                </div>
                <div class="input-row">
                    {!! Form::submit(trans('review.submit'),['class' =>'btn btn-default']) !!}
                </div>
                {!! Form::close() !!}
            </div>
        </div>


</main>
<!-- END MAIN CONTENT -->
@stop