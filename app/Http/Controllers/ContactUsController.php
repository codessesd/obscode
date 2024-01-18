<?php

namespace App\Http\Controllers;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ContactUsController extends Controller
{
  function store(Request $request)
  {
    // dd($request->all());

    dd(function (string $attribute, mixed $value, Closure $fail) {
      if ($value === 'foo') {
          $fail("The {$attribute} is invalid.");
      }
  });
    $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify',[
      'secret' => env('VITE_V2_RECAPTCHA_SECRETE_KEY'),
      'response' => $request->get('token'),
      'remoteip' => $request->ip(),
    ]);

    dd($response->json());

    $request->validate([
      'name' =>'required',
      'email' =>'required|email',
      'message' =>'required',
      'g-recaptcha-response' =>'required',
    ]);
  }
}
