@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_doctors abs_center sprites"></i>
            </div>
            <p>{{$left['main_cat']->getTitle()}}</p>
            @if(strpos(Request::url(), '/for-doctors/') == false)
                <a href="{{url('/for-doctors')}}" class="btn btn_style2 active">ВСЕ</a>
            @else
                <a href="{{url('/for-doctors')}}" class="btn btn_style2">ВСЕ</a>
            @endif
            @foreach($left['child_cat'] as $cat)
                @if($cat->select)
                    <a href="{{url('/for-doctors', $cat->id)}}" class="btn btn_style2 active">{{$cat->getTitle()}}</a>
                @else
                    <a href="{{url('/for-doctors', $cat->id)}}" class="btn btn_style2">{{$cat->getTitle()}}</a>
                @endif
            @endforeach
        </div>
        <div class="tab_filters ">
            <div class="btn-group magnet-filter">
                <button class="btn title_tab btn-link tab_all active" data-filter="*">Последние</button>
                <button class="btn title_tab btn-link tab_2015" data-filter="filter_2015">2015</button>
            </div>
            <div class="magnet">
                @foreach($news as $item)
                    <a href="{{url('/for-doctors', [$item->category_id, $item->id])}}" class="* magnet-item item ">
                        <div class="img">
                            <img src="{{$item->previewImage()}}" alt="">
                        </div>
                        <div class="info">
                            <p class="person_name">{{$item->getTitle()}}</p>
                            @if($item->doctor !== null)
                                <p class="person_post">{{$item->doctor->getName()}}</p>
                            @endif
                        </div>
                    </a>
                @endforeach
            </div>
            @if($news->lastPage() > $news->currentPage())
                <div class="wrap_center">
                    <a href="" class="btn btn_style1 btn_2 btn_more news_more" data-total="{{$news->lastPage()}}" data-current="{{$news->currentPage()}}" data-wipe="@lang('about.more-btn')">
                        <i class="ico_arr_down sprites"></i>@lang('about.more-btn')
                    </a>
                </div><!-- /.wrap_center -->
            @endif
        </div><!-- /.tab_filters -->
    </div><!-- /.widget -->
@endsection