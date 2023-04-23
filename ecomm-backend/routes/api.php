<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserConroller;
use App\Http\Controllers\ProductController;



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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("register",[UserConroller::class,'register']);
Route::Post("login",[UserConroller::class,'login']);
Route::Post("addproduct",[ProductController::class,'addproduct']);
Route::Get("list",[ProductController::class,'list']);
Route::get("delete/{id}",[ProductController::class,'delete']);
Route::get("product/{id}",[ProductController::class,'getproduct']);
Route::get("search/{key}",[ProductController::class,'search']);
Route::Put("updateproduct/{id}",[ProductController::class,'updateproduct']);







