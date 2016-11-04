@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_about abs_center sprites"></i>
            </div>
            <p>@lang('about.title')</p>
        </div>
        <div class="tab">
            <ul class="tabs tabs_about">
                <li class="current"><a href="#">@lang('about.shedule')</a></li>
                <li><a href="#">@lang('about.question')</a></li>
            </ul>
            <br>
            <div class="tab_content">
                <div class="tabs_item">
                    <div class="block_time">
                        <div class="time_img">
                            <i class="ico_time sprites"></i>
                        </div>
                        <div class="work_days">{{$schedule->getDayFrom()}} - {{$schedule->getDayTo()}}</div>
                        <div class="work_hours">{{$schedule->time_from}} - {{$schedule->time_to}}</div>
                    </div><!-- /.block_time -->
                    <div class="description">
                        <p>{!! $schedule->getText() !!}</p>
                    </div><!-- /.description -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="forma forma_question">
                        {!! Form::open(['url' => '/question/create']) !!}
                            <ul>
                                <li class="name_input {{ $errors->has('name') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_user sprites"></i>
                                        {!! Form::text('name', null, ['class' => 'control_input', 'placeholder' => trans('review.name')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p class='error_text'></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_mail email_input {{ $errors->has('email') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_mail sprites"></i>
                                        {!! Form::text('email', null, ['class' => 'control_input', 'placeholder' => trans('review.email')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p class='error_text'></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_message content_input {{ $errors->has('content') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_message sprites"></i>
                                        {!! Form::textarea('content', null, ['class' => 'control_input', 'placeholder' => trans('review.content')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p class='error_text'></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_submit">
                                    {!! Form::submit(trans('review.submit'),['class' =>'control_input']) !!}
                                </li>
                            </ul>
                        {!! Form::close() !!}
                    </div><!-- /.forma_question -->
                </div><!-- /.tabs_item -->
            </div><!-- /.tab_content -->
        </div><!-- /.tab -->
    </div><!-- /.widget -->
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_reviews abs_center sprites"></i>
            </div>
            <p>@lang('about.reviews')</p>
        </div><!-- /.block_leftbar -->
        <div class="block">
            <a href="#" class="add_reviews">
                <i class="ico_add sprites"></i>
                <p>@lang('about.add-review')</p>
            </a>
            <div class="reviews-list">
                @foreach($reviews as $review)
                    <div class="block_review">
                        <div class="reviews_img">
                            <i class="ico_user sprites abs_center"></i>
                        </div>
                        <div class="review_text">
                            <div class="person">{{$review->name}}</div>
                            <div class="date">{{$review->created_at}}</div>
                            <div class="text">{{$review->content}}</div>
                        </div>
                    </div><!-- /.block_review -->
                @endforeach
            </div>
            <div class="wrap_center">
                <a href="#" data-total="{{$reviews->lastPage()}}" data-current="{{$reviews->currentPage()}}" class="btn btn_style1 btn_2 btn_more more-reviews" data-wipe="@lang('about.more-btn')">
                    <i class="ico_arr_down sprites"></i>@lang('about.more-btn')</a>
            </div><!-- /.wrap_center -->
        </div><!-- /.block -->
    </div><!-- /.widget -->
   {{-- <style>
        .no-size{
            resize: none;
        }
    </style>
    <div class="container">
        <h1>О клинике</h1>
        <div class="col-md-3">
            {!! Form::open(['class' => 'review-form', 'url' => '/review/create']) !!}

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
    </div>--}}
@endsection