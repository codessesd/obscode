<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsBasic;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

    $data = [
      'name' => $request->name,
      'lastname' => $request->lastname,
      'company' => $request->company,
      'email' => $request->email,
      'phone' => $request->phone,
      'message' => $request->message,
    ];

    Mail::to(config('mail.site_email_address'))->send(new ContactUsBasic($data));
    dd('email sent');
  }
}