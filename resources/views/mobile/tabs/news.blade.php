<!-- AJAX PHOTO CONTAINER -->
<div class="doc-articles-container" id="doc-articles-container">
    <form action="#" class="filter-form">
        <div class="filters-wrap">
            <div class="select-row">
                <select class="md-select types-articles-select" name="" id="categories-for-doctors"
                        data-placeholder="Статьи" data-token="{{ csrf_token() }}">
                    @foreach($categories as $category)
                        <option data-link="/tabs/for_doctors/{{ $category['id'] }}" value="{{ $category['id'] }}">{{ $category['title_' . session('locale')] }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </form>
    <div class="content-container">
        @foreach($categories as $category)
            @foreach($category->news as $news)
                <div class="content-box content-box--article">
                    <a href="single/{{ $news['id'] }}" class="wrap-img">
                        <img src="{{ $news['main_image'] }}" alt="">
                    </a>
                    <div class="content-box__bottom">
                        <h3 class="article-name">
                            {{ $news['title_' . session('locale')] }}
                        </h3>
                        <div class="row">
                    <span class="article-name--desc">
                        {{ $news['updated_at'] }}
                </span>
                            <span class="article-author">Вася Пупкин</span>
                        </div>
                    </div>
                    @endforeach
                    @endforeach
                </div>

    </div>
    <a href="#" class="waves-effect waves-dark more-btn">
        Еще
    </a>
</div>
<!-- AJAX PHOTO CONTAINER -->