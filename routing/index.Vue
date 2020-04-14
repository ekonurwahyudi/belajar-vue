<html>
    <head>
        <title>Belajar Vue</title>
        <script src="../lib/vue.js"></script>
        <script src="../lib/vue-router.js"></script>
        <style>
            .fade-enter-active, .fade-leave-active{
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to{
                opacity: 0;
            }
        </style>
    </head>
<body>
    <div id="app">
        <p>
            <router-link to="/">Home</router-link>
            <router-link to='/about'>About</router-link>
            <router-link to='/books'>Books</router-link>
            <router-link :to="{ name: 'book', params: { bookId: 99 }}">Mastering Vue</router-link>
        </p>
        <hr>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>

    <script type="module">
    
    const Home = { template: '<div><h1>Halaman Home</h1></div>'}
    const About = { template: '<div>Halaman About</div>'}
    import { BooksComponent } from './BooksComponent.js'
    import { BookComponent } from './BookComponent.js'

    const routes = [
        { path: '/', component: Home, alias: '/home'},
        { path: '/about', component: About, meta: {login: true}},
        { path: '/books', component: BooksComponent, meta:{login: false}},
        { path: '/book/:id', name:'book', component: BookComponent, props: true },
        { path: '*', redirect: '/'}
    ]

    const router = new VueRouter({
        routes
    })

    router.beforeEach((to, from, next) =>{
        if (to.matched.some(record => record.meta.login)){
            alert('Halaman ini hanya untuk yang login')
            next(false)
        }else{
            next()
        }
    })

    var vm = new Vue({
        el: '#app',
        router,
    })
    </script>
</body>
</html>