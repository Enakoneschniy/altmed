<!-- AJAX PHOTO CONTAINER -->
<div class="doc-articles-container" id="doc-articles-container">
    <form action="#" class="filter-form">
        <div class="filters-wrap">
            @if(count($categories) > 0)
                <div class="select-row">
                    <select class="md-select types-articles-select" name="" id="categories-for-doctors"
                            data-placeholder="Статьи" data-token="{{ csrf_token() }}">
                        @foreach($categories as $category)
                            <option data-link="/tabs/for_doctors/{{ $category['id'] }}"
                                    value="{{ $category['id'] }}">{{ $category['title_' . session('locale')] }}</option>
                        @endforeach
                    </select>
                </div>
            @endif
        </div>
    </form>
    <div class="content-container">
        @if(count($categories) > 0)
            @foreach($categories as $category)
                @foreach($category->news as $news)
                    <div class="content-box content-box--article" data-id="{{ $category['id'] }}"
                         style="display: none;">
                        <a href="single/{{ $news['id'] }}" class="wrap-img">
                            <img src="{{ $news['main_image'] }}" alt="">
                        </a>
                        <div class="content-box__bottom">
                            <h3 class="article-name">
                                {{ $news['title_' . session('locale')] }}
                            </h3>
                            <div class="row">
                    <span class="article-name--desc">
                        {{  date('d.m.Y', strtotime($news['updated_at'])) }}
                </span>
                                <span class="article-author">{{ $news->doctor['name_' . session('locale')] }}</span>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endforeach
        @else
            @foreach($category->news as $news)
                {{--{{ dd($news['updated_at']) }}--}}
                <div class="content-box content-box--article" data-id="{{ $category['id'] }}"
                     style="display: none;">
                    <a href="single/{{ $news['id'] }}" class="wrap-img">
                        <img src="{{ $news['main_image'] }}" alt="">
                    </a>
                    <div class="content-box__bottom">
                        <h3 class="article-name">
                            {{ $news['title_' . session('locale')] }}
                        </h3>
                        <div class="row">
                    <span class="article-name--desc">
                        {{  date('d.m.Y', strtotime($news['updated_at'])) }}
                </span>
                            <span class="article-author">{{ $news->doctor['name_' . session('locale')] }}</span>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif


    </div>
    <a href="#" id="show-more" class="waves-effect waves-dark more-btn">
        Еще
    </a>
</div>
<!-- AJAX PHOTO CONTAINER -->