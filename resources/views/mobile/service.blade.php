@extends('layouts.mobile')

@section('content')
<!-- MAIN CONTENT -->
<main class="main">
    <div class="tabs-control-container">
        <div class="tabs-control-wrap" id="tabs-control">
            <a data-link="ajax/tabs/consultation.html" href="#" class="tabs-control">
                <span class="tabs-control__link">Консультация специалиста</span>
            </a>
            <a data-link="ajax/tabs/diagnostic.html" href="#" class="tabs-control">
                <span class="tabs-control__link">Диагностика</span>
            </a>
            <a data-link="ajax/tabs/vactinations.html" href="#" class="tabs-control">
                <span class="tabs-control__link">Вакцинация</span>
            </a>
            <a data-link="ajax/tabs/complex_program.html" href="#" class="tabs-control">
                <span class="tabs-control__link">Комплексные программы</span>
            </a>
        </div>
        <div class="tabs-arrow-wrap">
            <a href="#" class="tabs-prev waves-effect waves-dark">prev</a>
            <a href="#" class="tabs-next waves-effect waves-dark">next</a>
        </div>
    </div>
    <div class="container__inner">
        <div class="tabs__container" id="tabs-container">
        </div>
    </div>
</main>
<!-- END MAIN CONTENT -->
@endsection