<div class="wrap_center">
    <div class="block_slider">
        <div class="counterSlides">
            <span class="currentSlide">1</span>
            <span class="separatorSlide">/</span>
            <span class="totalSlide">1</span>
        </div>
        <div class=" owl-carousel slider_in_article">
            @foreach($gallery as $item)
                <div class="item">
                    <img src="{{$item}}" alt="">
                </div> <!-- / .item -->
            @endforeach
        </div> 	<!-- / .slider_in_article -->
    </div>
</div> <!-- / .wrap_center -->