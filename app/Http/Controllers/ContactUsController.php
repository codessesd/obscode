<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactUsController extends Controller
{
  function store(Request $request)
  {
    dd($request->all());
    $request->validate([
      'name' =>'required',
      'email' =>'required|email',
     'message' =>'required',
    ]);
  }
}
