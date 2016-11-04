@foreach($reviews as $review)
    <div class="block_review">
        <div class="reviews_img">
            <i class="ico_user sprites abs_center"></i>
        </div>
        <div class="review_text">
            <div class="person">{{$review->name}}</div>
            <div class="date">{{$review->created_at}}</div>
            <div class="text">{{$review->content}}</div>
        </div>
    </div>
@endforeach