<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\WorkSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests;

class AboutController extends MainController
{

    public function index(Review $review)
    {
        //$this->data['reviews'] = $review->getActiveItems();

        return view('desktop.about', $this->data);
    }

    /**
     * @param Review $review
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function mIndex(Review $review)
    {
        $this->data['reviews'] = $review->getActiveItems();

        return view('mobile.about', $this->data);
    }

    /**
     * @param Review $review
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function mFeedback(Review $review)
    {
        $this->data['reviews'] = $review->getActiveItems();
        $this->data['types'] = [
            ['id' => 1, 'title_ua' => 'Скарга', 'title_ru' => 'Жалоба'],
            ['id' => 2, 'title_ua' => 'Побажання', 'title_ru' => 'Пожелания'],
            ['id' => 3, 'title_ua' => 'Відгук', 'title_ru' => 'Отзыв'],
            ['id' => 4, 'title_ua' => 'Щось ще', 'title_ru' => 'Что-то еще'],
        ];
        return view('mobile.feedback', $this->data);
    }

    /**
     * @return mixed
     */
    public function mAsk(){
        return view('mobile.ask-form', $this->data);
    }

    /**
     * @param WorkSchedule $workSchedule
     * @return mixed
     */
    public function mTabsAbout(WorkSchedule $workSchedule)
    {
        $this->data['schedule'] = $workSchedule->get();
        return view('mobile.tabs.tabs-about', $this->data);
    }

    /**
     * @param Review $review
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function mTabsrespond(Review $review)
    {
        $this->data['reviews'] = $review->getActiveItems();
        return view('mobile.tabs.tabs-respond', $this->data);
    }
}
