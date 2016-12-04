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
    <script type='text/javascript'>
        var hostname = location.hostname;
        var lnHostname = hostname.length;
        var url = location.href.substr(lnHostname+7);
        //console.log(hostname, lnHostname, url, hostname.substr(0, 2));

        var mobiles = ["iPhone","iPod","Android", "BlackBerry", "Windows Phone", "Windows CE", "MOT"];//mobile devices
        var agent = navigator.userAgent;

        for(var index in mobiles){
            //testing if the RE matches the mobile agents

            if(agent.indexOf(mobiles[index]) !== -1) {
                location.href='http://m.' + hostname + url;
            }
        }
    </script>
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
                        @if(count($phones) > 0)
                            @foreach($phones as $phone)
                                @if(!$loop->last)
                                    <a href="tel:{{$phone->phone}}" class="tel">{{$phone->phone}},</a>
                                @else
                                    <a href="tel:{{$phone->phone}}" class="tel">{{$phone->phone}}</a>
                                @endif
                            @endforeach
                        @endif
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
                                        <a href="{{ url($item['url']) }}" class="">{{$item['title_'.session('locale')]}}</a>
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
                                    <a href="{{ url($item['url']) }}" class="">{{$item['title_'.session('locale')]}}</a>
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



    <section class="general" style="">
        @foreach($slides as $slide)
            <img src="{{$slide->image}}" alt="" class="abs img_fullpage slide{{$loop->index}} active">
        @endforeach
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
                            @foreach($slides as $slide)
                                <div class="item">
                                <div class="row">
                                    <div class="block_info">
                                        <h1>{{$slide->getTitle()}}</h1>
                                        {!!$slide->getText()!!}
                                        <div class="line_more">
                                            <a href="{{$slide->getLink()}}" class="link_more">подробнее</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col15">
                                        <a href="#" class="btn btn_3dtour" data-wipe="3D ТУР">3D ТУР</a>
                                    </div>
                                </div>
                            </div><!-- /.item -->
                            @endforeach
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


    <section class="content" id="content">
        <div class="container">
            <div class="row widget">
                <div class="block_leftbar">&nbsp;</div>
                <div class="line_help">
                    <div class="img">
                        <i class="ico_plus sprites"></i>
                    </div>
                    <!-- <div class="col6"> -->
                    <div class="text">
                        <h1>@lang('index.need_help')</h1>
                    </div>
                    <!-- </div> -->
                    {{--{{config('app.locale')}}--}}
                    <a class="btn btn_style1 btn_1" data-wipe="@lang('index.appointment')">@lang('index.appointment')</a>
                    <a href="{{url('consultation')}}" class="btn btn_style1 btn_2" data-wipe="@lang('index.consultation')">@lang('index.consultation')</a>
                </div>
            </div>
            @if(count($consultation['specialties']) > 0)
                <div class="row widget">
                    <div class="block_leftbar">
                        <div class="img">
                            <i class="ico_consult abs_center sprites"></i>
                        </div>
                        <p>@lang('index.consultation_left')</p>

                        <ul class="radio_btns cnsult_list">
                            @foreach($consultation['specialties'] as $key_spec => $specialty)
                                <li data-tabs="{{$key_spec}}">
                                    <input class="radio" id="radio_consult{{$loop->index}}" name="radio_consult" type="radio" @if($loop->first) checked @endif>
                                    <label tabindex="4" for="radio_consult{{$loop->index}}" class="radio-label consult">{{$specialty['title']}}</label>
                                </li>
                            @endforeach
                        </ul>
                    </div><!-- /.block_leftbar -->
                    <div class="tab tabs_consult_child">
                        <ul class="tabs tabs_consult">
                            @foreach($consultation['specialties'] as $key => $specialty)
                                @if($loop->first)
                                    @foreach($specialty['jobs'] as $job)
                                        <li class="{{$key}}"><a href="#">{{$job['title']}}</a></li>
                                    @endforeach
                                @else
                                    @foreach($specialty['jobs'] as $job)
                                        <li class="{{$key}}" style="display:none"><a href="#">{{$job['title']}}</a></li>
                                    @endforeach
                                @endif
                            @endforeach
                        </ul> <!-- / tabs -->
                        <div class="tab_content">
                           @foreach($consultation['specialties'] as $key => $specialty)
                               @if($loop->first)
                                   @foreach($specialty['jobs'] as $keyJob => $job)
                                        <div class="tabs_item">
                                            <div class="counterSlides">
                                                <span class="currentSlide">1</span>
                                                <span class="separatorSlide">/</span>
                                                <span class="totalSlide">1</span>
                                            </div>
                                            <div class="carousel_items">                            
                                               @foreach($job['doctors'] as $key => $doctor)
                                                   <a href="{{url('/consultation', [$keyJob, $key])}}" class="item">
                                                        <div class="img">
                                                            <img src="{{$doctor->previewImage()}}" alt="">
                                                        </div>
                                                        <div class="info">
                                                            <p class="person_name">{{$doctor->getName()}}</p>
                                                            <p class="person_post">{{$doctor->getQualify()}}</p>
                                                        </div>
                                                   </a>
                                                @endforeach
                                            </div>
                                        </div>
                                    @endforeach
                                  @else
                                       @foreach($specialty['jobs'] as $keyJob => $job)
                                            <div class="tabs_item">
                                                <div class="counterSlides">
                                                    <span class="currentSlide">1</span>
                                                    <span class="separatorSlide">/</span>
                                                    <span class="totalSlide">1</span>
                                                </div>
                                                <div class="carousel_items">
                                                   @foreach($job['doctors'] as $key => $doctor)
                                                       <a href="{{url('/consultation', [$keyJob, $key])}}" class="item">
                                                            <div class="img">
                                                                <img src="{{$doctor->previewImage()}}" alt="">
                                                            </div>
                                                            <div class="info">
                                                                <p class="person_name">{{$doctor->getName()}}</p>
                                                                <p class="person_post">{{$doctor->getQualify()}}</p>
                                                            </div>
                                                       </a>
                                                   @endforeach
                                                </div>
                                            </div>
                                        @endforeach
                                  @endif
                              @endforeach
                        </div>
                    </div>
                </div>
            @endif
            @foreach($leftItems as $rootCategory)
                <div class="row widget">
                    <div class="block_leftbar">
                        <div class="img">
                            <i class="{{$rootCategory->icon}} abs_center sprites"></i>
                        </div>
                        <p>{{$rootCategory->getTitle()}}</p>
                        @if($rootCategory->icon != 'ico_service')
                            <a href="#" class="btn btn_style2">{{trans('index.detail')}}</a>
                        @endif
                    </div><!-- /.block_leftbar -->
                    @if($rootCategory->icon == 'ico_service')
                        <div class="tab">
                            <ul class="tabs tabs_service">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    <li><a href="{{$child->id}}">{{$child->getTitle()}}</a></li>
                                @endforeach
                            </ul> <!-- / tabs -->
                            <div class="tab_content">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    <div class="tabs_item">
                                        <div class="counterSlides">
                                            <span class="currentSlide">1</span>
                                            <span class="separatorSlide">/</span>
                                            <span class="totalSlide">3</span>
                                        </div>
                                        <div class="carousel_items">
                                            @foreach($child->getNews() as $item)
                                                <a href="{{url('/service', [$child->id, $item->id])}}" class="item">
                                                    <div class="img">
                                                        <img src="{{$item->previewImage()}}" alt="">
                                                    </div>
                                                    <div class="info">
                                                        <p class="person_name">{{$item->getTitle()}}</p>
                                                        <p class="person_post">{{$item->doctor->getName()}}</p>
                                                    </div>
                                                </a>
                                            @endforeach
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @elseif($rootCategory->icon == 'ico_consult')
                        <div class="tab tabs_consult_child">
                            <ul class="tabs tabs_consult">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    @if($loop->first)
                                        @foreach($child->getChildrenHome() as $_child)
                                            <li><a href="#">{{$_child->getTitle()}}</a></li>
                                        @endforeach
                                    @endif
                                @endforeach
                            </ul> <!-- / tabs -->
                            <div class="tab_content">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    @if($loop->first)
                                        @foreach($child->getChildrenHome() as $_child)
                                            <div class="tabs_item">
                                                <div class="counterSlides">
                                                    <span class="currentSlide">1</span>
                                                    <span class="separatorSlide">/</span>
                                                    <span class="totalSlide">3</span>
                                                </div>
                                                <div class="carousel_items">
                                                    @foreach($_child->getNews() as $item)
                                                        <a href="{{url('/consultation', [$child->id, $item->id])}}" class="item">
                                                            <div class="img">
                                                                <img src="{{$item->previewImage()}}" alt="">
                                                            </div>
                                                            <div class="info">
                                                                <p class="person_name">{{$item->getTitle()}}</p>
                                                                <p class="person_post">{{$item->doctor->getName()}}</p>
                                                            </div>
                                                        </a>
                                                    @endforeach
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                @endforeach
                            </div>
                        </div>
                    @else
                        <div class="tab">
                            <ul class="tabs">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    <li><a href="#">{{$child->getTitle()}}</a></li>
                                @endforeach
                                @if($rootCategory->icon == 'ico_doctors' && count($vacancies) > 0)
                                        <li><a href="#">@lang('index.vacancy')</a></li>
                                @endif
                            </ul> <!-- / tabs -->
                            <div class="tab_content">
                                @foreach($rootCategory->getChildrenHome() as $child)
                                    <div class="tabs_item">
                                        <div class="counterSlides">
                                            <span class="currentSlide">1</span>
                                            <span class="separatorSlide">/</span>
                                            <span class="totalSlide">3</span>
                                        </div>
                                        <div class="carousel_items">
                                            @foreach($child->getNews() as $item)
                                                @if($rootCategory->icon == 'ico_doctors')
                                                    <a href="{{url('/for-doctors', [$child->id, $item->id])}}" class="item">
                                                @else
                                                    <a href="{{url('/news', [$child->id, $item->id])}}" class="item">
                                                @endif
                                                    <div class="img">
                                                        <img src="{{$item->previewImage()}}" alt="">
                                                    </div>
                                                    <div class="info">
                                                        <p class="person_name">{{$item->getTitle()}}</p>
                                                        <p class="person_post">{{$item->doctor->getName()}}</p>
                                                    </div>
                                                </a>
                                            @endforeach
                                        </div>
                                    </div>
                                @endforeach
                                @if($rootCategory->icon == 'ico_doctors' && count($vacancies) > 0)
                                        <div class="tabs_item">
                                            <div class="counterSlides">
                                                <span class="currentSlide">1</span>
                                                <span class="separatorSlide">/</span>
                                                <span class="totalSlide">1</span>
                                            </div>
                                            <div class="carousel_items">
                                                @foreach($vacancies as $vacancy)
                                                    <a href="{{url('/service', [$child->id, $item->id])}}" class="item">
                                                        <div class="img">
                                                            <img src="{{$vacancy->previewImage()}}" alt="">
                                                        </div>
                                                        <div class="info">
                                                            <p class="person_name">{{$vacancy->getTitle()}}</p>
                                                            <p class="person_post">{{$vacancy->getPreview()}}</p>
                                                        </div>
                                                    </a>
                                                @endforeach
                                            </div>
                                        </div>
                                @endif
                            </div>
                        </div>
                    @endif
                </div><!-- /.widget -->
            @endforeach

            <div class="row description_text">
                <p>Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно. Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих. <a href="#">Читать дальше</a></p>
            </div><!-- /.description_text -->
        </div><!-- /.container -->
    </section><!-- /.content -->

    <footer class="footer">
        <div class="container">
            <div class="row">
                <a href="#" class="logo2">
                    <img src="img/logo_altamedica2.png" alt="">
                </a>
            </div>
            <div class="row">
                <!-- <div class="col5"> -->
                @if(count($menu) > 0)
                    <ul class="menu_footer " role="menu">
                        @foreach($menu as $item)
                            <li class="active">
                                <a href="{{ url($item['url']) }}" class="">{{$item['title_'.session('locale')]}}</a>
                            </li>
                        @endforeach
                    </ul><!-- /.menu_footer -->
                @endif
                <div class="block_map">
                    <div class="tabs block_adresses_maps">
                        <ul class="block_adresses">
                            <p>Адреса клиник:</p>
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
                        </ul><!-- /.block_adresses -->
                        <div class="block_maps">
                            <div id="map-footer" class="map">
                            </div><!-- /.map -->
                        </div><!-- /.block_maps -->
                    </div><!-- /.block_adresses_maps -->
                </div><!-- /.block_map -->
            </div><!-- /.row -->
            <div class="row">
                <div class="line_contacts">
                    @if(count($phones) > 0)
                        <div class="block_phones">
                            <i class="ico_tel sprites"></i>
                            @foreach($phones as $phone)
                                @if(!$loop->last)
                                    <a href="tel:{{$phone->phone}}" class="tel">{{$phone->phone}},</a>
                                @else
                                    <a href="tel:{{$phone->phone}}" class="tel">{{$phone->phone}}</a>
                                @endif
                            @endforeach
                        </div><!-- /.block_phones -->
                    @endif
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
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXw_Ycc1wB7VSV9SeM9K_KF8HIOQ6v8c4&callback=initMap"></script>
<script src="js/script.js"></script>
<script>
    var addresses = <?php echo json_encode($addresses->toArray())?>;

    //initFooterMap(addresses);
</script>
</body>
</html>