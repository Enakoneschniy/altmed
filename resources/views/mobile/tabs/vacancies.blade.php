<!-- AJAX DIAGNOSTIC CONTAINER -->
<div class="vacancy-container" id="vacancy-container">
    <a href="#" class="waves-effect waves-light btn send-cv">
        Заполнить анкету
    </a>
    <form action="#" class="filter-form">
        <div class="filters-wrap">
            <div class="select-row">
                <select class="md-select types-vacancy-select" name="" id="">
                    <option value="">Все</option>
                    <option value="">Офтальмолог</option>
                    <option value="">Психиатр</option>
                    <option value="">Травматолог</option>
                    <option value="">Гинеколог</option>
                    <option value="">Иммунолог</option>
                </select>
            </div>
        </div>
    </form>
    <div class="content-container">
        @if($vacancies)
            @foreach($vacancies as $vacancy)
                <div class="content-box content-box--vacancy">
                    <div class="wrap-img">
                        <a href="/vacancy/{{ $vacancy['id'] }}">
                            <img src="{{ $vacancy['image'] }}" alt="">
                        </a>
                    </div>
                    <div class="content-box__bottom">
                        <h3 class="vacancy-name">
                            {{ $vacancy['title_'.session('locale')] }}
                        </h3>
                        <h4 class="vacancy-name--desc">
                            {{ $vacancy['description_'.session('locale')] }}
                        </h4>
                    </div>
                </div>
            @endforeach
        @endif
    </div>
    <a href="#" class="waves-effect waves-dark more-btn">
        Еще
    </a>
</div>
<!-- AJAX DIAGNOSTIC CONTAINER -->