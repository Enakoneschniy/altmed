@extends('layouts.app')

@section('content')
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_contacts abs_center sprites"></i>
            </div>
            <p>Адреса,<br>Контакты</p>
        </div>
        <div class="block">
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_time sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    <p class="days">Понедельник - Пятница</p>
                    <p class="hours">07:00 - 20:00</p>
                    <p class="days">Суббота - Воскресенье</p>
                    <p class="hours">08:00 - 180:00</p>
                </div>
            </div>
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_phone sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    <p>
                        <a href="" class="tel">(0432) 52-00-42</a>
                        <a href="" class="tel">(0432) 52-00-55</a>
                        <a href="" class="tel">(098) 555-02-02</a>
                    </p>
                </div>
            </div>
            <div class="contact_item">
                <div class="column1">
                    <div class="img">
                        <i class="ico_mail sprites"></i>
                    </div>
                </div>
                <div class="column2">
                    <a href="mailto:altamedik@gmail.com" class="mail">altamedik@gmail.com</a>
                </div>
            </div>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d328036.1193350647!2d36.46542611762971!3d50.03417717966305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d49.9887272!2d36.2511927!4m0!5e0!3m2!1sru!2sru!4v1469438490041"  style="border:0" allowfullscreen></iframe>
                </div>
                <!-- 							<div class="map">
                                            </div>
                                            <div class="map">
                                            </div>
                                            <div class="map">
                                            </div> -->
            </div>
            <div class="social_panel">
                <a href="#" class="icon">
                    <i class="ico_vk abs_center sprites"></i>
                </a>
                <a href="#" class="icon">
                    <i class="ico_google abs_center sprites"></i>
                </a>
                <a href="#" class="icon">
                    <i class="ico_yb abs_center sprites"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="row widget">
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_feedback abs_center sprites"></i>
            </div>
            <p>Обратная связь</p>
        </div>
        <div class="block">
            <div class="content_wrap">
                <div class="content">
                    <div class="forma forma_question">
                        <form action="" class="" id="" method="">
                            <ul>
                                <li class="input_user  ">
                                    <div class="column1">
                                        <i class="ico_input_user sprites"></i>
                                        <input type="text" placeholder="Имя Фамилия|" id="" class="control_input " name="">
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p>Введите имя и фамилию</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_mail">
                                    <div class="column1">
                                        <i class="ico_input_mail sprites"></i>
                                        <input type="text" placeholder="Адрес электронной почты" id="" class="control_input " name="">
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p>Введите электронный адрес</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_message">
                                    <div class="column1">
                                        <i class="ico_input_message sprites"></i>
                                        <textarea type="text" placeholder="Текст сообщения" id="" class="control_input " name=""></textarea>
                                    </div>
                                    <div class="column2">
                                        <div class="inform ok error">
                                            <i class="ico_ok sprites"></i>
                                            <i class="ico_error sprites"></i>
                                            <p>Введите сообщение</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="input_submit">
                                    <input type="submit" value="Отправить" class="control_input">
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection