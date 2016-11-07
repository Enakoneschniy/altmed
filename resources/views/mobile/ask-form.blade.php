@extends('layouts.mobile')

@section('content')

        <!-- MAIN CONTENT -->

<main class="main">
    {{--<div class="breadcrumbs">--}}
    {{--<ul>--}}
    {{--<li><a href="#">Контакты</a></li>--}}
    {{--<li><span>Обратная связь</span></li>--}}
    {{--</ul>--}}
    {{--</div>--}}
    <div class="container feedback-form__wrap">
        <div class="container__inner">
            {!! Form::open(['class' => 'review-form', 'url' => '/question/create']) !!}
            <div class="input-row {{ $errors->has('name') ? ' has-error' : '' }}">
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('review.name')]) !!}
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
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
            <div class="input-row {{ $errors->has('text') ? ' has-error' : '' }}">
                {!! Form::textarea('text', null, ['class' => 'form-control no-size', 'placeholder' => trans('review.content')]) !!}
                @if ($errors->has('text'))
                    <span class="help-block">
            <strong>{{ $errors->first('text') }}</strong>
            </span>
                @endif
            </div>
            <div class="input-row">
                <div class="g-recaptcha" data-sitekey="6LduPAsUAAAAABxR9EhEofAoLzaGfkgJl-1p2ers"></div>
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
