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
                        <div class="work_days">Понедельник - Воскресенье</div>
                        <div class="work_hours">07:00 - 20:00</div>
                    </div><!-- /.block_time -->
                    <div class="description">
                        <p>На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини
                            з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить
                            з розділів 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" ("Про межі добра і зла"), написаного
                            у 45 році до н.е. Цей трактат з теорії етики був дуже популярним в епоху Відродження. Перший рядок Lorem Ipsum, "Lorem ipsum dolor sit amet..." походить з одного з рядків розділу 1.10.32.</p>
                    </div><!-- /.description -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="forma forma_question">
                        {!! Form::open(['url' => '/review/create']) !!}
                            <ul>
                                <li class="{{ $errors->has('name') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_user sprites"></i>
                                        {!! Form::text('name', null, ['class' => 'control_input', 'placeholder' => trans('review.name')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            @if ($errors->has('name'))
                                                <i class="ico_error sprites"></i>
                                                <p>{{ $errors->first('name') }}</p>
                                            @endif
                                        </div>
                                    </div>
                                </li>
                                <li class="input_mail {{ $errors->has('email') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_mail sprites"></i>
                                        {!! Form::text('email', null, ['class' => 'control_input', 'placeholder' => trans('review.email')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            @if ($errors->has('email'))
                                                <i class="ico_error sprites"></i>
                                                <p>{{ $errors->first('email') }}</p>
                                            @endif
                                        </div>
                                    </div>
                                </li>
                                <li class="input_message {{ $errors->has('content') ? ' active message_error' : '' }}">
                                    <div class="column1">
                                        <i class="ico_input_message sprites"></i>
                                        {!! Form::textarea('content', null, ['class' => 'control_input', 'placeholder' => trans('review.content')]) !!}
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            @if ($errors->has('content'))
                                                <i class="ico_error sprites"></i>
                                                <p>{{ $errors->first('content') }}</p>
                                            @endif
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
            <div class="block_review">
                <div class="reviews_img">
                    <i class="ico_user sprites abs_center"></i>
                </div>
                <div class="review_text">
                    <div class="person">Алексей</div>
                    <div class="date">02.11.2016</div>
                    <div class="text">Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на </div>
                </div>
            </div><!-- /.block_review -->
            <div class="block_review">
                <div class="reviews_img">
                    <i class="ico_user sprites abs_center"></i>
                </div>
                <div class="review_text">
                    <div class="person">Алексей</div>
                    <div class="date">02.11.2016</div>
                    <div class="text">Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на </div>
                </div>
            </div><!-- /.block_review -->
            <div class="wrap_center">
                <a href="#" class="btn btn_style1 btn_2 btn_more" data-wipe="Еще">
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