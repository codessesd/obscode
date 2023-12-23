<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Discover elegant digital solutions with our offerings. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">

        <!-- <title inertia>{{ config('app.name', 'Obscode') }}</title> -->
        <title>Obscode</title>
        <meta name="keywords" content="digital solutions, custom web apps, stunning websites, e-commerce, hosting, website design, beautiful design, obscode">
        <meta name="author" content="Obscode">
        <meta name="robots" content="index, follow">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="Obscode">
        <meta property="og:description" content="Discover elegant digital solutions with our offerings. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">
        <meta property="og:url" content="https://obscode.co.za">
        <meta property="og:image" content="https://obscode.co.za/images/og.png">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Obscode">
        <meta name="twitter:description" content="Discover elegant digital solutions with our offerings. From custom web apps to stunning websites, e-commerce solutions, and seamless hosting – we bring your vision to life with creativity and precision. Elevate your online presence today!">
        <meta name="twitter:image" content="https://obscode.co.za/images/twitter.png">


        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

        <!-- <meta property="og:image" content="https://www.yourwebsite.com/images/your-thumbnail.jpg"> -->
        <!-- Fonts -->
        <!-- <link rel="preconnect" href="https://fonts.bunny.net"> -->
        <!-- <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> -->

        <!-- Scripts -->
        <!-- @routes -->
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
