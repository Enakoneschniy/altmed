<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuestionRequest;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * @param StoreQuestionRequest $request
     * @return mixed
     */
    public function create(StoreQuestionRequest $request){

        $formData = $request->all();
        Question::create($formData);
        return redirect()->back();
    }
}
