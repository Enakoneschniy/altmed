<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_ru');
            $table->string('name_ua');
            $table->string('email')->unique();
            $table->string('photo');
            $table->longText('description_ru');
            $table->longText('description_ua');
            $table->boolean('active');
            $table->integer('address_id');
            $table->integer('job_id');
            $table->integer('qualify_id');
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
        Schema::dropIfExists('doctors');
    }
}
