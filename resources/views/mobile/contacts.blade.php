@extends('layouts.mobile')

@section('content')
        <!-- MAIN CONTENT -->
<main class="main">
    <div id="ajax-map-content">
        <div class="container contact-container">
            <div class="container__inner">
                <div class="table-container__time">
                    <div class="table-days">
                        {{ $schedule[0]['working_days_' . session('locale')] }}
                    </div>
                    <div class="table-times">
                        {{ $schedule[0]['working_hours'] }}
                    </div>
                </div>
                <ul class="phone-list">

                    @foreach($phones as $phone)
                        <li class="phone-list__item"><a href="tel:{{ $phone['phone'] }}">{{ $phone['phone'] }}</a></li>
                    @endforeach
                </ul>
                <div class="row">
                    <a href="mailto:altamedik@gmail.com" class="mailto">altamedik@gmail.com</a>
                </div>
                <a href="#" class="waves-effect waves-light btn-transparent feedback-link">
                    Обратная связь
                </a>
                <div class="address-container">
                    <div class="address-container__title">
                        Адреса поликлиник
                    </div>
                    <ul class="address-list">
                        @foreach($addresses as $address)
                            <li class="address-list__item">
                                <a href="javascript:void(0)">{{ $address['address_' . session('locale')] }}</a>
                            </li>
                        @endforeach
                    </ul>
                    <a href="#" class="waves-effect waves-light btn-transparent local-link map-trigger-open">
                        Ваше местоположение
                    </a>
                    <a href="#" class="waves-effect waves-light btn create-way-link map-trigger-open">
                        Проложить маршрут
                    </a>
                </div>
            </div>
        </div>
    </div>


</main>
<!-- END MAIN CONTENT -->
@endsection