@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_news abs_center sprites"></i>
            </div>
            <p>{{$left['main_cat']->getTitle()}}</p>
            <a href="#" class="btn btn_style2 active">ВСЕ</a>
            @foreach($left['child_cat'] as $cat)
                @if($cat->select)
                    <a href="{{url('/news', $cat->id)}}" class="btn btn_style2 active">{{$cat->getTitle()}}</a>
                @else
                    <a href="{{url('/news', $cat->id)}}" class="btn btn_style2">{{$cat->getTitle()}}</a>
                @endif
            @endforeach
        </div>

        <div class="tab_filters ">
            <div class="btn-group magnet-filter">
                <button class="btn title_tab btn-link tab_all active" data-filter="*">Последние</button>
                <button class="btn title_tab btn-link tab_april" data-filter="filter_april">апрель</button>
                <button class="btn title_tab btn-link tab_march" data-filter="filter_march">март</button>
                <button class="btn title_tab btn-link tab_february" data-filter="filter_february">февраль</button>
                <button class="btn title_tab btn-link tab_2015" data-filter="filter_2015">2015</button>
            </div>
            <div class="magnet">
                @foreach($news as $item)
                    <a href="{{url('/news', $item->id)}}" class="filter_april magnet-item item ">
                        <div class="img">
                            <img src="{{$item->previewImage()}}" alt="">
                        </div>
                        <div class="info">
                            <p class="person_name">{{$item->getTitle()}}</p>
                            {{--<p class="person_post">{{$item->doctor->getName()}}</p>--}}
                        </div>
                    </a>
                @endforeach
{{--                <a href="#" class="filter_march magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">photo Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_february magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">video Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_march magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">photo Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_2015 magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">actia Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_april magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">video Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_april magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">article Старший врач ВЗР</p>
                    </div>
                </a>
                <a href="#" class="filter_april magnet-item item ">
                    <div class="img">
                        <img src="img/cart1.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="person_name">Анна Сергеевна Рузматова</p>
                        <p class="person_post">actia Старший врач ВЗР</p>
                    </div>
                </a>--}}
            </div>
            <div class="wrap_center">
                <a href="#" class="btn btn_style1 btn_2 btn_more" data-wipe="Еще">
                    <i class="ico_arr_down sprites"></i>Еще</a>
            </div><!-- /.wrap_center -->
        </div><!-- /.tab_filters -->

    </div><!-- /.widget -->
@endsection