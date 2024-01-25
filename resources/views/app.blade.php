<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Discover elegant web solutions. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">

        <!-- Google site ownership verification -->
        <meta name="google-site-verification" content="b4bKucdX0MlG8b8xyUsC_PnDrFRhVNYN_EPMfhkpsOU" />

        <!-- <title inertia>{{ config('app.name', 'Obscode') }}</title> -->
        <title>Obscode</title>
        <meta name="keywords" content="digital solutions, custom web apps, stunning websites, e-commerce, hosting, website design, beautiful design, obscode">
        <meta name="author" content="Obscode">
        <meta name="robots" content="index, follow">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="Obscode">
        <meta property="og:description" content="Discover elegant web solutions. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">
        <meta property="og:url" content="https://obscode.co.za">
        <meta property="og:image" content="https://obscode.co.za/images/og.png">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Obscode">
        <meta name="twitter:description" content="Discover elegant web solutions. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">
        <meta name="twitter:image" content="https://obscode.co.za/images/twitter.png">


        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        <!-- <meta property="og:image" content="https://www.yourwebsite.com/images/your-thumbnail.jpg"> -->
        <!-- Fonts -->
        <!-- <link rel="preconnect" href="https://fonts.bunny.net"> -->
        <!-- <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> -->

        <!-- Scripts -->
        {{-- reCaptcha v3 --}}
        {{-- render = site_key works for reCaptcha v3 key. And it will render the reCaptcha sign at the bottom right of the page. --}}
        {{-- Using reCaptcha v2 keys will not work. --}}
        
        {{-- <script src="https://www.google.com/recaptcha/enterprise.js?render=6LepEFApAAAAAPFIBt3oJLo6ON9gORtTk8vVOCbR" async defer ></script> --}}

        {{-- reCaptcha v2 Checkbox --}}
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        {{-- <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script> --}}
        <!-- @routes -->
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>

    <script>
    </script>

    <script type="text/javascript">
      console.log('The top script')
      let reCaptchaLoaded = false;
      var onloadCallback = function() {
        console.log('grecaptcha script loaded successfully');
        reCaptchaLoaded = true;
      };
    </script>
</html>