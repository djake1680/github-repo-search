<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('git_repositories', function (Blueprint $table) {
            $table->id();
            $table->string('repo_id');
            $table->string('repo_name');
            $table->string('username');
            $table->string('url');
            $table->dateTime('repo_created_date');
            $table->dateTime('last_push_date');
            $table->text('description')->nullable();
            $table->integer('star_count');
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
        Schema::dropIfExists('git_repositories');
    }
};
