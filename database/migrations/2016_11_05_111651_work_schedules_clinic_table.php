<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('working_days_ua');
            $table->string('working_days_ru');
            $table->string('working_hours');
            $table->text('description_ua');
            $table->text('description_ru');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
