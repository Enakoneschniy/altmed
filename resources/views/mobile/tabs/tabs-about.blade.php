{{--{{ dd($schedule[0]) }}--}}
<div class="table-container" id="table-container">
    <div class="table-container__time">
        <div class="table-days">
            {{ $schedule[0]['working_days_' . session('locale')] }}
        </div>
        <div class="table-times">
            {{ $schedule[0]['working_hours'] }}
        </div>
    </div>
    <div class="table-container__content">
        <p>
           {{ $schedule[0]['description_' . session('locale')] }}
        </p>
    </div>
    <a href="/ask" class="question-link">@lang('about.question')</a>
    <a href="#" class="waves-effect waves-dark price-btn">
        Прайс лист
    </a>
</div>