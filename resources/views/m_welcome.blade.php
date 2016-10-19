<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Altamedica</title>

    <!-- Stylessheet -->
    <link rel="stylesheet" href="mobile/css/main.css">

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
            <div class="side-nav__top auth">
                <div class="row">
                    <div class="avatar-wrap">
                        <div class="avatar-wrap__container">
                            <img src="mobile/img/avatar.png" alt="">
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="user-info__title">
                            Личный кабинет
                        </div>
                        <div class="user-info__name">
                            Валентина Сергеевна Петрова
                        </div>
                    </div>
                </div>
                <div class="row">
                    <a href="#" class="exit-link">Выход</a>
                </div>
            </div>
            <ul class="main-menu__lists">
                <li>
                    <a href="#" class="item item-about">
                        О клинике
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-service">
                        Услуги
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-consult">
                        Консультация
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-news">
                        Новости
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-table">
                        Расписание
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-doctors">
                        Для Врачей
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-contacts">
                        Контакты
                    </a>
                </li>
                <li>
                    <a href="#" class="item item-maps">
                        Карта
                    </a>
                </li>
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
                    <a href="#" data-toggle="modal" data-target="#modal" data-link="mobile/ajax/modals/phone.html" class="phone-btn">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="col-2">
                    <a href="#" data-toggle="modal" data-target="#modal" data-link="mobile/ajax/modals/search.html"
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
                <a href="#" class="logo__link">
                    Альтмедика медичний центр
                </a>
            </strong>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="main">
        <div class="container">
            <div class="container__inner">
                <!-- feedback block -->
                <div class="feedback-block">
                    <div class="feedback-block__title">
                        Нужна медицинская помощь?
                    </div>
                    <a href="#" class="waves-effect waves-light btn-transparent">
                        Консультация
                    </a>
                    <a href="#" class="waves-effect waves-light btn">
                        Записаться на приём
                    </a>
                </div>
                <!-- /feedback block -->
                <nav class="main-menu main-menu--page">
                    <ul class="main-menu__lists">
                        <li>
                            <a href="#" class="item item-about">
                                О клинике
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-service">
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-consult">
                                Консультация
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-news">
                                Новости
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-table">
                                Расписание
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-doctors">
                                Для Врачей
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-contacts">
                                Контакты
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item item-maps">
                                Карта
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
    <!-- END MAIN CONTENT -->
    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="container__inner">
                <div class="phone-block">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <div class="row">
                        <a href="tel:(0432)520042">(0432)52-00-42</a>,
                        <a href="tel:(0432)520055">(0432)52-00-55</a>,
                        <a href="tel:(098)5550202">(098)555-02-02</a>
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
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="mobile/js/main.js"></script>
</body>
</html>