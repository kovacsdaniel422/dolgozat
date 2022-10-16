<?php

use App\Models\Events;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id('event_id');
            $table->timestamps();
            $table->date('date');
            $table->string('location');
            $table->integer('fee');

            
        });

        Events::create(['date'=>2022_09_27,'location'=>'Budapest', 'fee' => 10000]);
        Events::create(['date'=>2022_05_25,'location'=>'Debrecen', 'fee' => 12000]);
        Events::create(['date'=>2022_06_14,'location'=>'Miskolc', 'fee' => 5000]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
