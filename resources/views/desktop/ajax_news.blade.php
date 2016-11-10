@foreach($news as $item)
    <a href="{{url('/news', [$item->category_id, $item->id])}}" class="* magnet-item item ">
        <div class="img">
            <img src="{{$item->previewImage()}}" alt="">
        </div>
        <div class="info">
            <p class="person_name">{{$item->getTitle()}}</p>
            @if($item->doctor !== null)
                <p class="person_post">{{$item->doctor->getName()}}</p>
            @endif
        </div>
    </a>
@endforeach