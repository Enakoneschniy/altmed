<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\Doctor;
use Illuminate\Http\Request;


use App\Http\Requests;

class ConsultationController extends MainController
{
    public function index(){
        $doctors = Doctor::where('active', true)->get();
        $arConsultation = [];
        foreach($doctors as $doctor){
            $arConsultation['specialties'][$doctor->specialty->id]['title'] = $doctor->specialty->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['title'] = $doctor->job->getTitle();
            $arConsultation['specialties'][$doctor->specialty->id]['jobs'][$doctor->job->id]['doctors'][$doctor->id] = $doctor;
        }
        $this->data['consultation'] = $arConsultation;
        return view('desktop.consultation.list', $this->data);
    }
    public function detail($job, $doc){
        $doctor = Doctor::find($doc);
        
        $this->data['pages'] = [
            'category' => [
                'title' => $doctor->job->getTitle(),
                'url' => '/consultation/'.$job,
                'section' => [
                    'title' => trans('index.consultation'),
                    'url' => '/consultation'
                ]
            ],
            'title' => $doctor->getName(),
            'url' => '/consultation/'.$job.'/'.$doc
        ];
        $this->data['doctor'] = $doctor;
        return view('desktop.consultation.detail', $this->data);
    }
    public function mIndex(){

        return view('mobile.consultation', $this->data);
    }
}
