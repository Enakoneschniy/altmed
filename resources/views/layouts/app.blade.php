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
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <title>{{ config('app.name', 'Laravel') }}</title>
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
    @yield('content')
</div>
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
