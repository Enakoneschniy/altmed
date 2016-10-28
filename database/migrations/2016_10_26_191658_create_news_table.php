<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title_ru');
            $table->string('title_ua');
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->boolean('published')->default(true);
            $table->text('text_ru');
            $table->text('text_ua');
            $table->string('image');
            $table->string('main_image');
            $table->longText('gallery');
            $table->integer('category_id');
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
        Schema::dropIfExists('news');
    }
}
