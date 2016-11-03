<!-- AJAX RESPOND CONTAINER -->
<div class="respond-container" id="respond-container">

    <a href="/feedback" class="leave-respond">
        <div class="btn-transparent waves-effect waves-dark"></div>
        @lang('about.add-review')
    </a>

    <div class="respond-block__wrap">

        @foreach($reviews as $review)
            <div class="respond-block respond-block-items" style="display: none;">
                <div class="respond-block__head">
                    <div class="respond-block__head-name">
                        {{ $review['name'] }}
                    </div>
                    <div class="respond-block__head-date">
                        {{ date('d.m.Y', strtotime($review['created_at'])) }}
                    </div>
                </div>
                <div class="respond-block__body">
                    {{ $review['content'] }}
                </div>
            </div>
        @endforeach

    </div>
    <a href="#" id="show-more-reviews" class="waves-effect waves-dark more-btn">
        @lang('about.more-btn')
    </a>
</div>
<!-- AJAX RESPOND CONTAINER -->