@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_doctors abs_center sprites"></i>
            </div>
            <p>Для врачей</p>
            <a href="#" class="btn btn_style2 active">Статьи</a>
            <a href="#" class="btn btn_style2">форумы</a>
            <a href="#" class="btn btn_style2">вакансии</a>
        </div>
        <div class="tab_filters ">
            <div class="btn-group magnet-filter">
                <button class="btn title_tab btn-link tab_all active" data-filter="*">Последние</button>
                <button class="btn title_tab btn-link tab_april" data-filter="category1">Категория 1</button>
                <button class="btn title_tab btn-link tab_march" data-filter="category2">Категория 2</button>
                <button class="btn title_tab btn-link tab_february" data-filter="category3">Категория 3</button>
                <button class="btn title_tab btn-link tab_2015" data-filter="category4">Категория 4</button>
            </div>
            <div class="magnet">
                <a href="" class="category1 magnet-item item ">
                    <div class="img">
                        <img src="img/img5.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Педиатр</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category2 magnet-item item ">
                    <div class="img">
                        <img src="img/img6.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Эндокринолог</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category3 magnet-item item ">
                    <div class="img">
                        <img src="img/img7.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Окулист</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category4 magnet-item item ">
                    <div class="img">
                        <img src="img/img9.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Лор</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category2 magnet-item item ">
                    <div class="img">
                        <img src="img/img5.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Педиатр</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category1 magnet-item item ">
                    <div class="img">
                        <img src="img/img6.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Эндокринолог</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category2 magnet-item item ">
                    <div class="img">
                        <img src="img/img7.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Окулист</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
                <a href="" class="category3 magnet-item item ">
                    <div class="img">
                        <img src="img/img9.jpg" alt="">
                    </div>
                    <div class="info">
                        <p class="title_doctor">Лор</p>
                        <p class="info_doctor">Вже давно відомо, що читабельний зміст буде...</span></p>
                    </div>
                </a>
            </div>
            <div class="wrap_center">
                <a href="#" class="btn btn_style1 btn_2 btn_more" data-wipe="Еще">
                    <i class="ico_arr_down sprites"></i>Еще</a>
            </div><!-- /.wrap_center -->
        </div><!-- /.tab_filters -->
    </div><!-- /.widget -->
@endsection