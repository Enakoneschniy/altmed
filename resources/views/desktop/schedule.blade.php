@extends('layouts.app')

@section('content')
    <div class="row widget">
        <!-- <div class="col2"> -->
        <div class="block_leftbar">
            <div class="img">
                <i class="ico_schedule abs_center sprites"></i>
            </div>
            <p>Расписание</p>
            <ul class="radio_btns">
                <li class="">
                    <input class="radio" id="radio_schedule1" name="radio_schedule" type="radio" checked>
                    <label tabindex="1" for="radio_schedule1" class="radio-label">Главный центр</label>
                </li>
                <li class="">
                    <input class="radio" id="radio_schedule2" name="radio_schedule" type="radio">
                    <label tabindex="1" for="radio_schedule2" class="radio-label">УЗ-диагностика</label>
                </li>
            </ul>
        </div>
        <div class="tab tabs_schedule tabs_main_center ">
            <ul class="tabs tabs_consult ">
                <li><a href="#">МЦ 1 мая - 7 мая 2016</a></li>
                <li><a href="#">МЦ 8 мая - 14 мая 2016</a></li>
                <li><a href="#">МЦ 9 мая - 15 мая 2016</a></li>
                <li><a href="#">МЦ 10 мая - 16 мая 2016 </a></li>
            </ul>
            <br>
            <div class="tab_content">
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача2</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача3</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача4</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача5</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
            </div><!-- /.tab_content -->
        </div><!-- /.tab.tabs_schedule -->
        <div class="tab tabs_schedule tabs_ultrasound_diagnosis">
            <ul class="tabs tabs_consult ">
                <li><a href="#">УЗ 1 мая - 7 мая 2016</a></li>
                <li><a href="#">УЗ 8 мая - 14 мая 2016</a></li>
                <li><a href="#">УЗ 9 мая - 15 мая 2016</a></li>
                <li><a href="#">УЗ 10 мая - 16 мая 2016 </a></li>
            </ul>
            <br>
            <div class="tab_content">
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача2</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача3</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача4</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
                <div class="tabs_item">
                    <div class="content content_schedule">
                        <table class="schedule_table">
                            <tr>
                                <th>Имя врача5</th>
                                <th>Специализация</th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                                <th>ВС</th>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Анна Сергеевна Рузматова</td>
                                <td>Педиатр</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                                <td>8:30 16:00</td>
                                <td>8:30 16:00</td>
                                <td>-</td>
                            </tr>
                        </table><!-- /.schedule_table -->
                    </div><!-- /.content_schedule -->
                </div><!-- /.tabs_item -->
            </div><!-- /.tab_content -->
        </div><!-- /.tab.tabs_schedule -->
    </div><!-- /.widget -->
@endsection