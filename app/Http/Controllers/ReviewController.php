<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests;



class ReviewController extends MainController
{
    /**
     * @param StoreReviewRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function create(StoreReviewRequest $request){

        $formData = $request->all();
        $formData['active'] = 0;
        Review::create($formData);
//        Mail::send('emails.review', $formData, function($message) use ($formData)
//        {
//            $message->from('evgenij.nakoneschniy@yandex.ru', 'Altamedica')
//                ->subject('Altamedica: отзыв')
//                ->to($formData['email']);
//        });
        return redirect()->back();
    }
}
