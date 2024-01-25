<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactUsController;
use Inertia\Inertia;

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
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::inertia('/','Index');
Route::inertia('/services','Services');
Route::inertia('/pricing','Pricing');
Route::inertia('/contact','Contact');
Route::post('/contact',[ContactUsController::class,'store']);
// Route::get('testContact', fn()=>view('vendor/mail/html/message'));
// Route::inertia('testContact','Contact');

// Route::post('/contactMessage','ContactController@store');
// Route::post('/contactMessage',[ContactUs::class,'store']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
