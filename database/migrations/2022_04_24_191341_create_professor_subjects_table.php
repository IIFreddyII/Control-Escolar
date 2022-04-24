<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfessorSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professor_subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idProfessor')->references('id')->on('professors')->onDelete('cascade');
            $table->foreignId('idSubject')->references('id')->on('subjects')->onDelete('cascade');
            $table->string('period');
            $table->string('year');
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
        Schema::dropIfExists('professor_subjects');
    }
}
