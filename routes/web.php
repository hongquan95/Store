<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/home', function () {
//     return view('welcome');
// });

// Route::get('/test', function () {
//     return view('admin.dashboard');
// });

Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'as' => 'admin.'], function () {
    Auth::routes();
    Route::get('/dashboard', 'HomeController@index')->name('dashboard');
    Route::get('categories/datatables', 'CategoryController@dataTables')->name('categories.datatables');
    Route::resource('categories', 'CategoryController');
});

