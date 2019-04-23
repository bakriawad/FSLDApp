<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMyUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('my_users', function (Blueprint $table) {
            $table->increments('id');
            $table->string("firstName",50);
            $table->string("lastName",50);
            $table->string("email",120);
            $table->string("mobile",15);
            $table->string("gender",1);
            $table->date("dob");
            $table->text("comments");
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
        Schema::dropIfExists('my_users');
    }
}
