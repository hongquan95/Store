<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1'], function () {
    Route::middleware('auth:api')->get('/account', function (Request $request) {
        return $request->user();
    });
    Route::post('/login', 'AuthController@login')->name('account.login');
    Route::get('/products', 'ProductController@index');
    Route::get('/products/{id}', 'ProductController@show');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/logout', 'AuthController@logout')->name('account.logout');
    });
    Route::post('/register', 'AuthController@register')->name('account.register');
});
