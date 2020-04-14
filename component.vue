<html>
    <head>
        <title>Belajar Vue</title>
        <script src="lib/vue.js"></script>
        <script src="lib/vue-router.js"></script>
    </head>
    <body>
        <style type="text/css">
            .card{
                background: #efefef;
                border: 1px solid #ddd;
                margin-right: 5px;
                padding: 5px;
                width: 200px;
                float: left;
                
            }
            h3{
                min-height: 45px;
            }
            .slide-fade-enter-active {
                transition: all .3s ease;
            }
            .slide-fade-leave-active {
                transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            }
            .slide-fade-enter, .slide-fade-leave-to
                /* .slide-fade-leave-active below version 2.1.8 */ {
                transform: translateX(10px);
                opacity: 0;
            
            }
        }
        </style>

        <div id="app">
        </div>
        <script type="text/javascript">
        var MixinHello = {
            created: function(){
                this.hello()
            },
            methods: {
                hello: function(){
                    console.log('hello from mixin')
                }
            }
        }

        var vm = new Vue({
            el: '#app',
            mixins: [
                MixinHello
            ]
        })
        </script>
    </body>
</html>