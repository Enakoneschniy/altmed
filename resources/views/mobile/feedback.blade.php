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
            {!! Form::open(['class' => 'review-form', 'url' => '/review/create']) !!}
            <div class="filters-wrap">
                <div class="select-row">
                    <select class="md-select feedback-form-select" name="type_id" id="">
                        @foreach($types as $type)
                            <option value="{{ $type['id'] }}">{{ $type['title_' . session('locale')] }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="input-row {{ $errors->has('name') ? ' has-error' : '' }}">
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('review.name'), 'id' => 'phone']) !!}
                @if ($errors->has('name'))
                    <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                @endif
            </div>
            <div class="input-row {{ $errors->has('phone') ? ' has-error' : '' }}">
                {!! Form::text('phone', null, ['class' => 'form-control', 'placeholder' => '380']) !!}
                @if ($errors->has('phone'))
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
            <div class="input-row {{ $errors->has('content') ? ' has-error' : '' }}">
                {!! Form::textarea('content', null, ['class' => 'form-control no-size', 'placeholder' => trans('review.content')]) !!}
                @if ($errors->has('content'))
                    <span class="help-block">
            <strong>{{ $errors->first('content') }}</strong>
            </span>
                @endif
            </div>
            <div class="input-row">
                <div class="captcha">
                    <img src="/img/captcha.png" alt="">
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


