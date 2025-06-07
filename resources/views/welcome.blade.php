<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Christian Uyeh</title>
        @vite('resources/css/app.css')
        @vite('node_modules/bootstrap/dist/css/bootstrap.min.css')
        @vite('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
        @vite('node_modules/animate.css/animate.min.css')
        <!-- Fonts -->
    </head>
    <body class="antialiased">
          <div id="app-wrapper">
    	<div id="portfolio"></div>
              <footer class="footer mt-5">
            <p>
                Copyright &copy; Christian Uyeh 2025 All rights Reserved
            </p>
        </footer>
        @vite('resources/js/app.js')
        @vite('node_modules/jquery/dist/jquery.slim.min.js')
        @vite('node_modules/@popperjs/core/dist/umd/popper.min.js')
        @vite('node_modules/bootstrap/dist/js/bootstrap.min.js')
         </div>
    </body>
</html>

<script setup>

</script>
