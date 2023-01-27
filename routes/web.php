<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::resource('gitRepos', \App\Http\Controllers\GitRepositoryController::class);

Route::get('/gitDataFetch/{repoCount}', 'App\Http\Controllers\GitRepositoryController@gitDataFetch');
Route::get('gitReposUpdate', 'App\Http\Controllers\GitRepositoryController@gitReposUpdate');
