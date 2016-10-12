<!doctype html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta charset="utf-8">
    <title>Альтамедика</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="css/animate.css">
    <link href="css/owl.carousel.css" rel="stylesheet">

    <!--[if lte IE 9]><link href="css/ie9.css" rel="stylesheet" type="text/css" /><![endif]-->
    <!--[if lte IE 8]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->
    <!--[if lte IE 8]>
    <script>
        var e = ("article,aside,footer,header,nav,section,figure,figcaption").split(',');
        for (var i = 0; i < e.length; i++) {document.createElement(e[i]);}
    </script>
    <![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="wrapper">
    <header class="main">
        <div class="container container_norm">
            <div class="row">
                <div class="top_line">
                    <div class="col4">
                        <a href="#" class="logo">
                            <img src="img/logo_altamedic.png" alt="" class="logo_big">
                        </a><!-- /.logo -->
                    </div>
                    <div class="col4 scroll_hidden">&nbsp;</div>
                    <div class="col6 scroll_hidden">
                        <i class="ico_tel sprites"></i>
                        <a href="tel:+380432520042" class="tel">(0432) 52-00-42,</a>
                        <a href="tel:+380432520055" class="tel">(0432) 52-00-55,</a>
                        <a href="tel:+380985550202" class="tel">(098) 555-02-02</a>
                    </div>
                    <div class="col1 scroll_hidden">
                        <div class="block_lang text-right">
                            @foreach($locales as $locale)
                                @if($locale == session('locale'))
                                    <a href="javascript:void(0);" class="lang active">{{$locale}}</a>
                                @else
                                    <a href="{{ url('/setlocale', $locale) }}" class="lang">{{$locale}}</a>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div><!-- /.top_line -->
                <div class="row">
                    <div class="col8 scroll_hidden">&nbsp;</div>

                    <div class="col2 bl_right">
                        <div class="block_person text-right">
                            <a href="#" class="icon btn_person_icon">
                                <i class="ico_person abs_center sprites"></i>
                            </a>
                            <a href="#" class="icon btn_search_icon">
                                <i class="ico_search abs_center sprites"></i>
                            </a>
                        </div><!-- /.block_person -->
                    </div><!-- /.col2 -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col15">
                        @if(isset($menu))
                            <ul class="main_menu " role="menu">
                                @foreach($menu as $item)
                                    <li class="active">
                                        <a href="{{ url($item['url']) }}" class="">{{$item['title_'.config('app.locale')]}}</a>
                                    </li>
                                @endforeach
                            </ul><!-- /.main_menu -->
                        @endif
                    </div><!-- /.col15 -->
                </div><!-- /.row -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </header><!-- /header -->


    <div id="header">
        <div class="container">
            <div class="row">
                <div class="top_line">
                    <a href="#" class="logo">
                        <img src="img/logo_mini.png" alt="" class="logo_mini">
                    </a>
                    @if(isset($menu))
                        <ul class="main_menu " role="menu">
                            @foreach($menu as $item)
                                <li class="active">
                                    <a href="{{ url($item['url']) }}" class="">{{$item['title_'.config('app.locale')]}}</a>
                                </li>
                            @endforeach
                        </ul><!-- /.main_menu -->
                    @endif
                    <div class="block_person text-right">
                        <a href="#" class="icon btn_person_icon">
                            <i class="ico_person abs_center sprites"></i>
                        </a>
                        <a href="#" class="icon btn_search_icon">
                            <i class="ico_search abs_center sprites"></i>
                        </a>
                    </div><!-- /.block_person -->
                </div><!-- /.top_line -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /#header -->



    <section class="general">
        <div class="container">
            <div class="row">
                <div class="col15">
                    <div class="general_slider">
                        <div class="social_panel">
                            <a href="#" class="icon" target="_blank">
                                <i class="ico_vk abs_center sprites"></i>
                            </a>
                            <a href="#" class="icon" target="_blank">
                                <i class="ico_google abs_center sprites"></i>
                            </a>
                            <a href="#" class="icon" target="_blank">
                                <i class="ico_yb abs_center sprites"></i>
                            </a>
                        </div> <!-- /.social_panel -->
                        <div class=" owl-carousel" id="general_slider">
                            <div class="item">
                                <div class="row">
                                    <div class="block_info">
                                        <h1>1Информация о клинике</h1>
                                        <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст."</p>
                                        <div class="line_more">
                                            <a href="#" class="link_more">подробнее</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col15">
                                        <a href="#" class="btn btn_3dtour" data-wipe="3D ТУР">3D ТУР</a>
                                    </div>
                                </div>
                            </div><!-- /.item -->
                            <div class="item">
                                <div class="row">
                                    <div class="block_info">
                                        <h1>2Информация о клинике</h1>
                                        <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст."</p>
                                        <div class="line_more">
                                            <a href="#" class="link_more">подробнее</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col15">
                                        <a href="#" class="btn btn_3dtour" data-wipe="3D ТУР">3D ТУР</a>
                                    </div>
                                </div>
                            </div><!-- /.item -->
                            <div class="item">
                                <div class="row">
                                    <div class="block_info">
                                        <h1>3Информация о клинике</h1>
                                        <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст."</p>
                                        <div class="line_more">
                                            <a href="#" class="link_more">подробнее</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col15">
                                        <a href="#" class="btn btn_3dtour" data-wipe="3D ТУР">3D ТУР</a>
                                    </div>
                                </div>
                            </div><!-- /.item -->
                        </div><!-- / #general_slider -->
                    </div><!-- /.general_slider -->
                </div><!-- /.col15 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
        <div class="row line_more general_line_more text-center">
            <a href="#content" class="link_down scroll">
                <i class="ico_arrow abs_center sprites"></i>
            </a>
        </div>
    </section><!-- /.general -->



    <footer class="footer">
        <div class="container">
            <div class="row">
                <a href="#" class="logo2">
                    <img src="img/logo_altamedica2.png" alt="">
                </a>
            </div>
            <div class="row">
                <!-- <div class="col5"> -->
                <ul class="menu_footer " role="menu">
                    @foreach($menu as $item)
                        <li class="active">
                            <a href="{{ url($item['url']) }}" class="">{{$item['title_'.config('app.locale')]}}</a>
                        </li>
                    @endforeach
                </ul><!-- /.menu_footer -->
                <div class="block_map">
                    <div class="tabs block_adresses_maps">
                        <ul class="block_adresses">
                            <p>Адреса клиник:</p>
                            <li class="block_adress active">
                                <div class="img">
                                    <i class="ico_local sprites"></i>
                                </div>
                                <div class="city">
                                    г. Бар
                                </div>
                                <div class="district">
                                    ул. Р.Люксембург, 43
                                </div>
                            </li>
                            <li class="block_adress">
                                <div class="img">
                                    <i class="ico_local sprites"></i>
                                </div>
                                <div class="city">
                                    г. Бар
                                </div>
                                <div class="district">
                                    ул. Р.Люксембург, 43
                                </div>
                            </li>
                            <li class="block_adress">
                                <div class="img">
                                    <i class="ico_local sprites"></i>
                                </div>
                                <div class="city">
                                    г. Бар
                                </div>
                                <div class="district">
                                    ул. Р.Люксембург, 43
                                </div>
                            </li>
                            <li class="block_adress">
                                <div class="img">
                                    <i class="ico_local sprites"></i>
                                </div>
                                <div class="city">
                                    г. Бар
                                </div>
                                <div class="district">
                                    ул. Р.Люксембург, 43
                                </div>
                            </li>
                        </ul><!-- /.block_adresses -->
                        <div class="block_maps">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d328036.1193350647!2d36.46542611762971!3d50.03417717966305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d49.9887272!2d36.2511927!4m0!5e0!3m2!1sru!2sru!4v1469438490041"  style="border:0" allowfullscreen></iframe>
                                <a href="#" class="link_map">Перейти к карте1</a>
                            </div><!-- /.map -->
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d5460603.078747388!2d30.550904481249994!3d48.06565706105013!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LI!3m2!1d50.4501!2d30.5234!5e0!3m2!1sru!2sru!4v1469438623163" allowfullscreen></iframe>
                                <a href="#" class="link_map">Перейти к карте2</a>
                            </div><!-- /.map -->
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d328036.1193350647!2d36.46542611762971!3d50.03417717966305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d49.9887272!2d36.2511927!4m0!5e0!3m2!1sru!2sru!4v1469438490041"  style="border:0" allowfullscreen></iframe>
                                <a href="#" class="link_map">Перейти к карте3</a>
                            </div><!-- /.map -->
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d5460603.078747388!2d30.550904481249994!3d48.06565706105013!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LI!3m2!1d50.4501!2d30.5234!5e0!3m2!1sru!2sru!4v1469438623163" allowfullscreen></iframe>
                                <a href="#" class="link_map">Перейти к карте4</a>
                            </div><!-- /.map -->
                        </div><!-- /.block_maps -->
                    </div><!-- /.block_adresses_maps -->
                </div><!-- /.block_map -->
            </div><!-- /.row -->
            <div class="row">
                <div class="line_contacts">
                    <div class="block_phones">
                        <i class="ico_tel sprites"></i>
                        <a href="tel:+38043252-00-42" class="tel" title="">(0432) 52-00-42,</a>
                        <a href="tel:+38043252-00-55" class="tel" title="">(0432) 52-00-55,</a>
                        <a href="tel:+38098555-02-02" class="tel" title="">(098) 555-02-02</a>
                    </div><!-- /.block_phones -->
                    <div class="block_mail">
                        <i class="ico_mail sprites"></i>
                        <a href="mailto:altamedik@gmail.com" class="link_mail">altamedik@gmail.com</a>
                    </div><!-- /.block_mail -->
                    <div class="social_panel">
                        <a href="#" class="icon" target="_blank">
                            <i class="ico_vk abs_center sprites"></i>
                        </a>
                        <a href="#" class="icon" target="_blank">
                            <i class="ico_google abs_center sprites"></i>
                        </a>
                        <a href="#" class="icon" target="_blank">
                            <i class="ico_yb abs_center sprites"></i>
                        </a>
                    </div><!-- /.social_panel -->
                </div><!-- /.line_contacts -->
            </div><!-- /.row -->
            <div class="row">
                <div class="logo_ukrlogic tex-left ">
                    <a href="" class="" target="_blank">
                        <p>Powered by </p>
                        <img src="img/logo_ukrlogic.png" alt="">
                    </a>
                </div><!-- /.logo_ukrlogic -->
                <div class="copy tex-right ">
                    <p>Copyright&copy;2016.  <a href="altamedica.com.ua." class="link">altamedica.com.ua.</a>  All rights reserved</p>
                </div><!-- /.copy -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </footer><!-- /footer -->

    <section class="wrap_search">
        <div class="wrap">
            <div class="col3">
                <a href="#" class="btn_back">Назад</a>
            </div><!-- /.col3 -->
            <div class="col12">
                <div class="block_search">
                    <input type="search" placeholder="Поиск" name="input_search" class="input_search" id="input_search" >
                    <input type="submit" value="" class="btn_search ">
                </div><!-- /.block_search -->
                <ul class="radiobuttons">
                    <li class="">
                        <input class="radio" id="radio-1" name="rd" type="radio" checked>
                        <label tabindex="4" for="radio-1" class="radio-label">По всему сайту</label>
                    </li>
                    <li class="">
                        <input class="radio" id="radio-2" name="rd" type="radio">
                        <label tabindex="5" for="radio-2" class="radio-label">Для пациента</label>
                    </li>
                    <li class="">
                        <input class="radio" id="radio-3" name="rd" type="radio">
                        <label tabindex="6" for="radio-3" class="radio-label iconicfill-check">Для врача</label>
                    </li>
                </ul><!-- /.radiobuttons -->
                <div class="list_search mCustomScrollbar">
                    <ul class="list_items">
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                        <li class="item">
                            <a href="" class="link_elem">
                                <p class="title_elem">Lorem ipsum</p>
                                <p class="type_elem">Статья</p>
                            </a>
                        </li>
                    </ul><!-- /.list_items -->
                </div><!-- /.list_search -->
            </div><!-- /.col12 -->
        </div><!-- /.wrap -->
    </section> <!-- /.wrap_search -->

    <a href="#" class="scroll_up">
        <i class="ico_up sprites abs_center"></i>
    </a><!-- /.scroll_up -->

</div> <!-- /.wrapper -->
<!-- <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> -->
<!-- <script>window.jQuery || document.write('<script src="js/jquery.js"><\/script>')</script> -->

<script src="js/jquery2_1_3.js"></script>
<script src="js/jquery.arcticmodal-0.3.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.maskedinput.min.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script src="js/jquery.smoothscroll.js"></script>
<script src="js/required_fields.js"></script>
<link rel='stylesheet prefetch' href='http://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.min.css'>
<script src='http://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min.js'></script>
<script src="js/magnet.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/mousewheel.js"></script>
<script src="js/scroll.js"></script>
<script src="js/main.js"></script>
</body>
</html>