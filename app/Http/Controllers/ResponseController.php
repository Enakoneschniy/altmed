<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use App\Http\Requests\StoreResponseRequest;
use App\Models\Response;
use Illuminate\Http\Request;

class ResponseController extends MainController
{
    public function create( StoreResponseRequest $request )
    {
//        var_dump($request->all());
//        die();
        if(Input::file('summary')->isValid()){
            $destinationPath = public_path().'/images/uploads/response/';
            $file_name = time() . '_' . Input::file('summary')->getClientOriginalName() . '.' . Input::file('summary')->getClientOriginalExtension();
            Input::file('summary')->move($destinationPath, $file_name);
        }
        $formData = $request->all();
        $formData['summary'] = '/images/uploads/response/' . $file_name;
        Response::create($formData);
        return redirect()->back();
    }

}
