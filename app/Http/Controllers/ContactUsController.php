<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMailable;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactUsController extends Controller
{
  function store(Request $request)
  {
     $request->validate([
      'name' =>'required|max:50',
      'lastname' =>'max:50',
      'company' =>'max:50',
      'email' =>'required|email|max:100',
      'phone' =>'max:20',
      'message' =>'required|max:1000',
      'token' =>['required', new Recaptcha]
    ],['token.required' => 'The reCAPTCHA field is required.']);

    $data = [
      'name' => $request->name,
      'lastname' => $request->lastname,
      'company' => $request->company,
      'email' => $request->email,
      'phone' => $request->phone,
      'message' => $request->message,
    ];
    try{
      Mail::to(config('mail.global_email_address'))->queue(new ContactUsMailable($data));
    }catch(\Exception $e){
      return inertia('Contact')->with('fail', 'Error code: '.$e->getCode());
    }
    return inertia('Contact')->with('success', 'Thank you for contacting us. We will get back to you soon.');
  }
}

