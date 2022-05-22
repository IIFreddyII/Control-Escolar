<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            //$table->foreignId('idUser')->references('id')->on('users')->onDelete('cascade');
            $table->string('email')->unique();
            $table->string('name');
            $table->string('firstName');
            $table->string('lastName');
            $table->enum('sex',['Masculino','Femenino']);
            $table->string('curp')->unique();
            $table->string('address');
            $table->string('tel')->unique();
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
        Schema::dropIfExists('students');
    }
}
