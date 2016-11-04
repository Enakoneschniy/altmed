<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests;
use Illuminate\Support\Facades\Response;
use Validator;


class ReviewController extends MainController
{
    function question(Request $request){
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'content' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()){
            return Response::json($validator->getMessageBag()->toArray(), 400); // 400 being the HTTP code for an invalid request.
        }
        Question:create($request->all());
    }
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
