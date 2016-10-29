<div class="modal-content modal-content--phone">
    <button type="button" class="close" data-dismiss="modal">
        &times;
    </button>
    <div class="modal-body">
        @foreach($phones as $phone)
            <div class="row phone--row">
                <div class="phone--row__title">{{ $phone['title'] }}</div>
                <div class="phone--row__number">{{ $phone['phone'] }}</div>
                <a class="phone--row__link" href="tel:{{ $phone['phone'] }}"></a>
            </div>
        @endforeach
        <div class="row phone--row phone--row--notice">
            {{ trans('modals.click_to_call') }}
        </div>
    </div>
</div>