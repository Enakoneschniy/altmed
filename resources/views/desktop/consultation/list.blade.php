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
@endsection