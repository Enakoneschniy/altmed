<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\WorkSchedule;
use Illuminate\Http\Request;

use App\Http\Requests;

class ContactsController extends MainController
{
    public function index(){

        return view('desktop.contacts', $this->data);
    }
    public function mIndex(WorkSchedule $workSchedule, Address $address){
//        $this->data['contacts'] = ['1',2, 3];
        $this->data['schedule'] = $workSchedule->get();
        $this->data['addresses'] = $address->get();
        return view('mobile.contacts', $this->data);
    }
}
