<html>
    <head>
        <title>Belajar Vue</title>
        <script src="lib/vue.js"></script>
    </head>
    <body>
        <style type="text/css">
        .title{
            color: green;
        }
        </style>

        <div id="app">
            <img :src="'images/books/' + avatar.image" />
        </div>

        <script type="text/javascript">
        var vm = new Vue({
            el: '#app',
            data: {
                avatar:{
                    image: 'ww.jpeg'
                }
            }
        })
        </script>
    </body>
</html>