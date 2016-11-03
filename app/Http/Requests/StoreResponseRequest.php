<?php

namespace App\Http\Requests;


class StoreResponseRequest extends Request
{
    /**

     * Determine if the user is authorized to make this request.

     *

     * @return bool

     */

    public function authorize()

    {

        return true;

    }



    /**

     * Get the validation rules that apply to the request.

     *

     * @return array

     */

    public function rules()

    {

        return [

            'vacancy_id' => 'required',

            'name' => 'required',

            'phone' => 'required',

            'email' => 'required|email',

            'content' => 'required',

            'summary' => 'required|file|mimes:doc,txt,docx,pdf,odt',

        ];

    }
}