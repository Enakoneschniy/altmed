@extends('layouts.app')

@section('content')
    <style>
        .no-size{
            resize: none;
        }
    </style>
    <div class="container">
        <h1>О клинике</h1>
        <div class="col-md-3">
            {!! Form::open(['class' => 'review-form', 'url' => '/review/create']) !!}
                <div class="form-group {{ $errors->has('name') ? ' has-error' : '' }}">
                    {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('review.name')]) !!}
                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
                    {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => trans('review.email')]) !!}
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="form-group {{ $errors->has('content') ? ' has-error' : '' }}">
                    {!! Form::textarea('content', null, ['class' => 'form-control no-size', 'placeholder' => trans('review.content')]) !!}
                    @if ($errors->has('content'))
                        <span class="help-block">
                            <strong>{{ $errors->first('content') }}</strong>
                        </span>
                    @endif
                </div>
            <div class="form-group">
                {!! Form::submit(trans('review.submit'),['class' =>'btn btn-default']) !!}
            </div>
            {!! Form::close() !!}
        </div>
        <div class="col-md-9"></div>
    </div>
@endsection