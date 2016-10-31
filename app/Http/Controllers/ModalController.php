<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Class ModalController
 * @package App\Http\Controllers
 */

class ModalController extends MainController
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function phones()
    {
        return view('mobile.modals.phone', $this->data);
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function search()
    {
        return view('mobile.modals.search', $this->data);
    }

    /**
     * @return mixed
     */
    public function share()
    {
        return view('mobile.modals.social', $this->data);
    }
}
