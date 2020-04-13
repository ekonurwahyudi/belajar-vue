<html>
    <head>
        <title>Belajar Vue</title>
        <script src="lib/vue.js"></script>
    </head>
    <body>
        <style type="text/css">
        .title{
            color: mediumspringgreen;
        }
        </style>

        <div id="app">
            <h1 v-bind:class="class_h1"> {{ pesan }} </h1>
        </div>

        <script type="text/javascript">
        Vue.config.silent = true
        var vm = new Vue({
            el: '#app',
            data: {
                pesan: "Selamat Pagi",
                class_h1: "title"
            },
        })
        </script>
    </body>
</html>