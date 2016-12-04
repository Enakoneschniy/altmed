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
                @foreach($addresses as $key => $address)
                    <li class="block_adress @if($loop->first) active @endif" data-index="{{$key}}">
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
                {{--<div class="btn btn_style1 btn_1 btn_geolocal" data-wipe="Ваше местоположение">
                    <i class="ico_geolocal sprites"></i>Ваше местоположение</div>
                <div class="btn btn_style1 btn_1" data-wipe="Проложить маршрут">Проложить маршрут</div>--}}
            </div>
            {{--{{dd($addresses)}}--}}
            <div class="block_maps">
                <div id="map" class="map"></div>
            </div>
        </div>
    </div>
    <script>
        var addresses = <?php echo json_encode($addresses->toArray())?>;
    </script>
@endsection