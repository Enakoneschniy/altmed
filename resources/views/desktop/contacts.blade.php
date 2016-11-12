@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_contacts abs_center sprites"></i>
            </div>
            <p>@lang('about.contact_title')</p>
        </div>
        <div class="block">
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_time sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    @foreach($schedules as $schedule)
                        <p class="days">{{$schedule->getDayFrom()}} - {{$schedule->getDayTo()}}</p>
                        <p class="hours">{{$schedule->time_from}} - {{$schedule->time_to}}</p>
                    @endforeach
                </div>
            </div>
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_phone sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    <p>
                        @foreach($phones as $phone)
                            <a href="tel:{{$phone->phone}}" class="tel">{{$phone->phone}}</a>
                        @endforeach
                    </p>
                </div>
            </div>
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_mail sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    @foreach($emails as $email)
                        <a href="mailto:{{$email->email}}" class="mail">{{$email->email}}</a>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="block">
            <ul class="block_adresses">
                @foreach($addresses as $address)
                    <li class="block_adress @if($loop->first) active @endif">
                        <div class="img">
                            <i class="ico_local sprites"></i>
                        </div>
                        <div class="city">
                            {{$address->getCity()}}
                        </div>
                        <div class="district">
                            {{$address->getAddress()}}
                        </div>
                    </li>
                @endforeach
            </ul>
            <div class="wrap_center">
                <div class="btn btn_style1 btn_1 btn_geolocal" data-wipe="@lang('about.we_location')">
                    <i class="ico_geolocal sprites"></i>@lang('about.we_location')</div>
                <div class="btn btn_style1 btn_1" data-wipe="@lang('about.direction')">@lang('about.direction')</div>

            </div>
            <div class="block_maps">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d328036.1193350647!2d36.46542611762971!3d50.03417717966305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d49.9887272!2d36.2511927!4m0!5e0!3m2!1sru!2sru!4v1469438490041"  style="border:0" allowfullscreen></iframe>
                </div>
                <!-- 							<div class="map">
                                            </div>
                                            <div class="map">
                                            </div>
                                            <div class="map">
                                            </div> -->
            </div>
            <div class="social_panel">
                <a href="#" class="icon">
                    <i class="ico_vk abs_center sprites"></i>
                </a>
                <a href="#" class="icon">
                    <i class="ico_google abs_center sprites"></i>
                </a>
                <a href="#" class="icon">
                    <i class="ico_yb abs_center sprites"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_feedback abs_center sprites"></i>
            </div>
            <p>Обратная связь</p>
        </div>
        <div class="block">
            <div class="content_wrap">
                <div class="content">
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
                </div>
            </div>
        </div>
    </div>
@endsection