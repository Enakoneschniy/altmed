@extends('layouts.app')

@section('content')
    @if(count($consultation['specialties']) > 0)
        <div class="row widget">
            <div class="block_leftbar">
                <div class="img">
                    <i class="ico_consult abs_center sprites"></i>
                </div>
                <p>@lang('index.consultation_left')</p>

                <ul class="radio_btns cnsult_list">
                    @foreach($consultation['specialties'] as $key_spec => $specialty)
                        <li data-tabs="{{$key_spec}}">
                            <input class="radio" id="radio_consult{{$loop->index}}" name="radio_consult" type="radio" @if($loop->first) checked @endif>
                            <label tabindex="4" for="radio_consult{{$loop->index}}" class="radio-label consult">{{$specialty['title']}}</label>
                        </li>
                    @endforeach
                </ul>
            </div><!-- /.block_leftbar -->
            <div class="tab tabs_consult_child">
                <ul class="tabs tabs_consult">
                    @foreach($consultation['specialties'] as $key => $specialty)
                        @if($loop->first)
                            @foreach($specialty['jobs'] as $job)
                                <li class="{{$key}}"><a href="#">{{$job['title']}}</a></li>
                            @endforeach
                        @else
                            @foreach($specialty['jobs'] as $job)
                                <li class="{{$key}}" style="display:none"><a href="#">{{$job['title']}}</a></li>
                            @endforeach
                        @endif
                    @endforeach
                </ul> <!-- / tabs -->
                <div class="tab_content">
                    @foreach($consultation['specialties'] as $key => $specialty)
                        @if($loop->first)
                            @foreach($specialty['jobs'] as $keyJob => $job)
                                <div class="tabs_item">
                                    <div class="counterSlides">
                                        <span class="currentSlide">1</span>
                                        <span class="separatorSlide">/</span>
                                        <span class="totalSlide">1</span>
                                    </div>
                                    <div class="carousel_items">
                                        @foreach($job['doctors'] as $key => $doctor)
                                            <a href="{{url('/consultation', [$keyJob, $key])}}" class="item">
                                                <div class="img">
                                                    <img src="{{$doctor->previewImage()}}" alt="">
                                                </div>
                                                <div class="info">
                                                    <p class="person_name">{{$doctor->getName()}}</p>
                                                    <p class="person_post">{{$doctor->getQualify()}}</p>
                                                </div>
                                            </a>
                                        @endforeach
                                    </div>
                                </div>
                            @endforeach
                        @else
                            @foreach($specialty['jobs'] as $keyJob => $job)
                                <div class="tabs_item">
                                    <div class="counterSlides">
                                        <span class="currentSlide">1</span>
                                        <span class="separatorSlide">/</span>
                                        <span class="totalSlide">1</span>
                                    </div>
                                    <div class="carousel_items">
                                        @foreach($job['doctors'] as $key => $doctor)
                                            <a href="{{url('/consultation', [$keyJob, $key])}}" class="item">
                                                <div class="img">
                                                    <img src="{{$doctor->previewImage()}}" alt="">
                                                </div>
                                                <div class="info">
                                                    <p class="person_name">{{$doctor->getName()}}</p>
                                                    <p class="person_post">{{$doctor->getQualify()}}</p>
                                                </div>
                                            </a>
                                        @endforeach
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    @endif
    @foreach($leftItems as $rootCategory)
        <div class="row widget">
            <div class="block_leftbar">
                <div class="img">
                    <i class="{{$rootCategory->icon}} abs_center sprites"></i>
                </div>
                <p>{{$rootCategory->getTitle()}}</p>
            </div>
            @if($rootCategory->icon == 'ico_vaccine' && $rootCategory->news->count() > 0)
                <div class="">
                    <div class="block">
                        <div class="img vertical_img">
                            <img src="{{$rootCategory->news[0]->previewImage(214, 297)}}" alt="" class="mCS_img_loaded">
                        </div>
                        <div class="text">
                            <h2>{{$rootCategory->news[0]->getFullTitle()}}</h2>
                            {!! $rootCategory->news[0]->getFullText() !!}
                            <a class="btn btn_style1 btn_1" data-wipe="@lang('about.add-record')">@lang('about.add-record')</a>
                            <a href="{{url('/about-clinic')}}" class="btn btn_style1 btn_2" data-wipe="@lang('about.question')">@lang('about.question')</a>
                        </div>
                    </div>
                </div>
            @elseif($rootCategory->icon == 'ico_cabinets')
                <div class="tab_filters ">
                    <div class="btn-group magnet-filter">
                        <button class="btn title_tab btn-link tab_all active" data-filter="*">Все кабинеты</button>
                        @foreach($rootCategory->getChildrenCategories() as $children)
                            <button class="btn title_tab btn-link tab_cab{{$children->id}}" data-filter="tab_cab{{$children->id}}">{{$children->getTitle()}}</button>
                        @endforeach
                    </div>
                    <div class="magnet">
                        @foreach($rootCategory->getChildrenCategories() as $children)
                            @foreach($children->news as $cabinet)
                                <a href="{{url('/service',[$children->id, $cabinet->id])}}" class="tab_cab{{$children->id}} magnet-item item ">
                                    <div class="img">
                                        <img src="{{$cabinet->previewImage()}}" alt="">
                                    </div>
                                    <div class="info">
                                        <p class="person_name">{{$cabinet->doctor->getName()}}</p>
                                        <p class="person_post">{{$cabinet->doctor->getQualify()}}</p>
                                    </div>
                                </a>
                            @endforeach
                        @endforeach
                    </div>
                </div>
            @else
                <div class="tab tabs_consult_child">
                    <ul class="tabs">
                        @foreach($rootCategory->getChildrenCategories() as $children)
                            <li><a href="#">{{$children->getTitle()}}</a></li>
                        @endforeach
                    </ul>
                    <br>
                    <div class="tab_content">
                        @foreach($rootCategory->getChildrenCategories() as $cat)
                            <div class="tabs_item">
                                <div class="counterSlides">
                                    <span class="currentSlide">1</span>
                                    <span class="separatorSlide">/</span>
                                    <span class="totalSlide">1</span>
                                </div>
                                <div class="carousel_items">
                                    @foreach($cat->news as $post)
                                        <a href="{{url('/consultation',[$cat->id, $post->id])}}" class="item">
                                            <div class="img">
                                                <img src="{{$post->previewImage()}}" alt="">
                                            </div>
                                            <div class="info">
                                                <p class="person_name">{{$post->getTitle()}}</p>
                                                <p class="person_post">{{$post->doctor->getName()}}</p>
                                            </div>
                                        </a>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endif
        </div>
    @endforeach
@endsection