@extends('layouts.mobile')

@section('content')
        <!-- MAIN CONTENT -->
<main class="main">
    <div class="container">
        <div class="breadcrumbs">
            <ul>
                <li><a href="/for-doctors">{{ $news->category->parent['title_' . session('locale')] }}</a></li>
                <li><a href="/for-doctors">{{ $news->category['title_' . session('locale')] }}</a></li>
                <li><span>{{ $news['title_' . session('locale')] }}</span></li>
            </ul>
        </div>

        <div class="container__inner article--container">
            <h2 class="article-name-row">
                {{ $news['title_' . session('locale')] }}
            </h2>
            <h6 class="article-author-row">
                Автор статьи: <a href="#" class="author-link">Иван Иванов</a>
            </h6>
        </div>

        <div class="article--container">
            <div class="wrap-img wrap-img--wide">
                <img src="{{ $news['main_image'] }}" alt="">
                <a href="#" data-toggle="modal" data-target="#modal" data-link="/modals/share-it"
                   class="social-share">Поделиться</a>
            </div>
            <div class="article-text">
                {{ nl2br(str_replace('[gallery]', '',$news['text_' . session('locale')])) }}
                <img src="{{ $news['image'] }}" alt="">
            </div>
            <a href="#" class="waves-effect waves-dark similar-btn">
                Похожая статья
            </a>
        </div>
    </div>
</main>
<!-- END MAIN CONTENT -->
@endsection