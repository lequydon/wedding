<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>WEDDING</title>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suneditor@2.43.9/dist/css/suneditor.min.css"> -->
    <!-- <link rel="stylesheet" href="../../node_modules/sun"> -->
    <!-- Styles -->
    <script type="text/javascript">
        window.Laravel = 
        `{!! json_encode([
            'baseUrl' => url('/'),
            'csrfToken' => csrf_token(),
        ]) !!}`;
    </script>
        @viteReactRefresh
        @vite('resources/js/app.js')
</head>
<body>
<div id="app"></div>
</body>
</html>