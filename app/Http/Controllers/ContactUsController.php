<?php

namespace App\Http\Controllers;

use App\Rules\Recaptcha;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ContactUsController extends Controller
{
  function store(Request $request)
  {
    $request->validate([
      'name' =>'required',
      'email' =>'required|email',
      'message' =>'required',
      'token' =>['required', new Recaptcha]
    ],['token.required' => 'Please check the reCAPTCHA']);

    dd('We are here');
  }
}
