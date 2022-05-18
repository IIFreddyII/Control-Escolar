<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfessorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idUser')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('firstName');
            $table->string('lastName');
            $table->enum('sex',['Masculino','Femenino']);
            $table->string('curp');
            $table->string('address');
            $table->string('tel');
            $table->string('cedula');
            $table->enum('academic_degree',['Licenciatura','Maestria','Doctorado']);
            $table->string('specialty');
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
        Schema::dropIfExists('professors');
    }
}
