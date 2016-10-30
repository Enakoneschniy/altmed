<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Altamedica</title>

    <!-- Stylessheet -->
    <link rel="stylesheet" href="/mobile/css/main.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!-- WRAPPER -->
<div class="main-wrapper" id="wrapper">
    <!-- sidenav-->
    <nav class="main-menu main-menu--side" id="main-menu--side">
        <div id="slide-out" class="side-nav">
            <ul class="main-menu__lists">
                @if(count($menu) > 0)
                    @foreach($menu as $item)
                        @if($item['url'] != '/' && $item['url'] != '/prices')
                            <li>
                                <a href="{{url($item['url'])}}" class="item {{$item['icon']}}">
                                    {{$item['title_'.session('locale')]}}
                                </a>
                            </li>
                        @endif
                    @endforeach
                @endif
            </ul>
        </div>
        <button type="button" class="close close-nav">
            &times;
        </button>
    </nav>

    <!-- HEADER -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="col-1 menu-col">
                    <a href="#" data-activates="slide-out" class="menu-btn open-nav">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#" data-toggle="modal" data-target="#modal" data-link="/modals/phone"
                       class="phone-btn">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#" data-toggle="modal" data-target="#modal" data-link="modals/search"
                       class="search-btn">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="col-1 right-align">
                    <a href="#" class="lang-bar__btn">
                        RU
                    </a>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <strong class="logo">
                <a href="/" class="logo__link">
                    {{ trans('layout.description') }}
                </a>
            </strong>
        </div>
    </header>
    <main class="main">
        @yield('content')
    </main>

    <footer class="footer">
        <div class="container">
            <div class="container__inner">
                <div class="phone-block">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <div class="row">
                        @foreach($phones as $phone)
                            <a href="tel:{{ $phone['phone'] }}">{{ $phone['phone'] }}</a>
                            @if(!$loop->last)
                                {{ ',' }}
                            @endif
                        @endforeach
                    </div>
                </div>
                <div class="mail-block">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <div class="row">
                        <a href="email:altamedik@gmail.com">altamedik@gmail.com</a>
                    </div>
                </div>
                <ul class="social-row">
                    <li class="social-row__items">
                        <a href="#" class="social-icon social-icon--vk">
                            <i class="fa fa-vk" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="social-row__items">
                        <a href="#" class="social-icon social-icon--google">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="social-row__items">
                        <a href="#" class="social-icon social-icon--youtube">
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                <div class="copyright">
                    Copyright&copy;2016. altamedica.com.ua.<br>
                    All rights reserved
                </div>
                <strong class="developer">
                    <a href="#" class="developer__link">
                        UKRLOGIC
                    </a>
                </strong>
            </div>
        </div>
    </footer>

</div>

<!-- Default bootstrap modal example -->
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">

    </div>
</div>

<!-- /WRAPPER -->
<!-- jQuery & JS-->
{{--<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>--}}
<script src="/mobile/js/jquery.js"></script>
<script src="/mobile/js/jquery.maskedinput-1.3.js"></script>
<script src="/mobile/js/jquery.formstyler.js"></script>
<script src="/mobile/js/jquery.mCustomScrollbar.js"></script>
<script src="/mobile/js/materialize.js"></script>
<script src="/mobile/js/tabsload.js"></script>
<script src="/mobile/js/tabs.js"></script>
<script src="/mobile/js/main.js"></script>
<script src="/mobile/js/slick.js"></script>
</body>
</html>