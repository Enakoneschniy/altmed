@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_map abs_center sprites"></i>
            </div>
            <p>Карта</p>
        </div>
        <div class="block">
            <ul class="block_adresses">
                <li class="block_adress active">
                    <div class="img">
                        <i class="ico_local sprites"></i>
                    </div>
                    <div class="city">
                        г. Винница
                    </div>
                    <div class="district">
                        Ул. Улица 45/4
                    </div>
                </li>
                <li class="block_adress">
                    <div class="img">
                        <i class="ico_local sprites"></i>
                    </div>
                    <div class="city">
                        г. Винница
                    </div>
                    <div class="district">
                        Ул. Улица 45/4
                    </div>
                </li>
                <li class="block_adress">
                    <div class="img">
                        <i class="ico_local sprites"></i>
                    </div>
                    <div class="city">
                        г. Винница
                    </div>
                    <div class="district">
                        Ул. Улица 45/4
                    </div>
                </li>
                <li class="block_adress">
                    <div class="img">
                        <i class="ico_local sprites"></i>
                    </div>
                    <div class="city">
                        г. Винница
                    </div>
                    <div class="district">
                        Ул. Улица 45/4
                    </div>
                </li>
            </ul>
            <div class="wrap_center">
                <div class="btn btn_style1 btn_1 btn_geolocal" data-wipe="Ваше местоположение">
                    <i class="ico_geolocal sprites"></i>Ваше местоположение</div>
                <div class="btn btn_style1 btn_1" data-wipe="Проложить маршрут">Проложить маршрут</div>
            </div>
            <div class="block_maps">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d5460603.078747388!2d30.550904481249994!3d48.06565706105013!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LI!3m2!1d50.4501!2d30.5234!5e0!3m2!1sru!2sru!4v1469438623163" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
@endsection