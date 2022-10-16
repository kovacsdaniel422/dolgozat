<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->integer('budget');
            $table->timestamps();
        });

        User::create(['name'=>'Máté','email'=>'bmate@gmail.hu','budget'=>50000]);
        User::create(['name'=>'Balázs','email'=>'ibalazs@gmail.hu','budget'=>30000]);
        User::create(['name'=>'Márton','email'=>'mmarton@gmail.hu','budget'=>150000]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
