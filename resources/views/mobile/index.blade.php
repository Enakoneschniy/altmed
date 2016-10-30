@extends('layouts.mobile')

@section('content')

    <main class="main">
        <div class="container">
            <div class="container__inner">
                <!-- feedback block -->
                <div class="feedback-block">
                    <div class="feedback-block__title">
                        {{ trans('index.need_help') }}
                    </div>
                    <a href="#" class="waves-effect waves-light btn-transparent">
                        {{ trans('index.consultation') }}
                    </a>
                    <a href="#" class="waves-effect waves-light btn">
                        {{ trans('index.appointment') }}
                    </a>
                </div>
                <!-- /feedback block -->
                <nav class="main-menu main-menu--page">
                    <ul class="main-menu__lists">
                        @if(count($menu) > 0)
                            @foreach($menu as $item)
                                @if($item['url'] != '/' && $item['url'] != '/prices')
                                    <li>
                                        <a href="{{url($item['url'])}}" class="item {{$item['icon']}}">
                                            {{$item['title_' . session('locale')]}}
                                        </a>
                                    </li>
                                @endif
                            @endforeach
                        @endif
                    </ul>
                </nav>
            </div>
        </div>
    </main>

@endsection