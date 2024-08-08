<?php

use App\Http\Controllers\api\v1\auth\SigninController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v1'], function () {
    Route::group([
        'as' => 'auth.',
        'prefix' => 'auth',
    ], function () {
        Route::post('signin', [SigninController::class, 'signin'])->name('.signin');
    });
});