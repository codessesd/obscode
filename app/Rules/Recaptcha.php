<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class Recaptcha implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
      $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify',[
         'secret' => env('VITE_V2_RECAPTCHA_SECRETE_KEY'),
         'response' => $value,
         'remoteip' => request()->ip(),
        ]);

        if($response->json()['success'] === false) {
          $fail('The reCAPTCHA was invalid.');
        }
    }
}
