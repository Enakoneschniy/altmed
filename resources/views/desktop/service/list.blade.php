@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_consult abs_center sprites"></i>
            </div>
            <p>{{$consultation->getTitle()}}</p>
            <ul class="radio_btns">
                @foreach($consultation->getChildrenCategories() as $category)
                    <li class="">
                        <input class="radio" id="radio_consult{{$loop->index}}" name="radio_consult" type="radio" @if($loop->first) checked @endif>
                        <label tabindex="4" for="radio_consult{{$loop->index}}" class="radio-label">{{$category->getTitle()}}</label>
                    </li>
                @endforeach
            </ul>
        </div><!-- /.block_leftbar -->
        <div class="tab tabs_consult_child">
            <ul class="tabs tabs_consult ">
                @foreach($consultation->getChildrenCategories() as $children)
                    @if($loop->first)
                        @foreach($children->getChildrenCategories() as $cat)
                            <li><a href="#">{{$cat->getTitle()}}</a></li>
                        @endforeach
                    @endif
                @endforeach
            </ul>
            <br>
            <div class="tab_content">
                @foreach($consultation->getChildrenCategories() as $children)
                    @foreach($children->getChildrenCategories() as $cat)
                        <div class="tabs_item">
                            <div class="counterSlides">
                                <span class="currentSlide">1</span>
                                <span class="separatorSlide">/</span>
                                <span class="totalSlide">1</span>
                            </div>
                            <div class="carousel_items">
                                @foreach($cat->news as $service)
                                    <a href="{{url('/consultation',[$cat->id, $service->id])}}" class="item">
                                        <div class="img">
                                            <img src="{{$service->previewImage()}}" alt="">
                                        </div>
                                        <div class="info">
                                            <p class="person_name">{{$service->getTitle()}}</p>
                                            <p class="person_post">{{$service->doctor->getName()}}</p>
                                        </div>
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                @endforeach
            </div>
        </div>
    </div>

@endsection