<html>
    <head>
        <title>Belajar Vue</title>
        <script src="lib/vue.js"></script>
        <style>
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
        </style>
    </head>
    <body>
        <div id="app">
            <h1>Selected: {{ selectedBook }}</h1>
            <book 
                v-for="book in books"
                :key="book.id"
                :book="book"
                @selected="selectedBook = $event"
            >
            </book>
        </div>

        <script type="module">
        import { BookComponent } from './BookComponent.js'
        var vm = new Vue({
            el: '#app',
            components: {
                'book': BookComponent,
            },
            data:{
                books:[
                    {
                        id: 99,
                        judul: 'Buku C++',
                        deskripsi: 'mudah dipelajari',
                        penulis: 'Eko Nurwahyudi',
                        tahun: '2019',
                        harga: 98000,
                        image: 'c++.jpg'
                        
                    },
                    {
                        id: 98,
                        judul: 'Buku Python',
                        deskripsi: 'mudah dipelajari',
                        penulis: 'Eko Nurwahyudi',
                        tahun: '2019',
                        harga: 87000,
                        image: 'pyhton.jpg'
                        
                    },
                    {
                        id: 97,
                        judul: 'Buku Vue',
                        deskripsi: 'mudah dipelajari',
                        penulis: 'Eko Nurwahyudi',
                        tahun: '2019',
                        harga: 70000,
                        image: 'vue.jpg'
                        
                    },
                    {
                        id: 96,
                        judul: 'Buku React',
                        deskripsi: 'mudah dipelajari',
                        penulis: 'Eko Nurwahyudi',
                        tahun: '2019',
                        harga: 98000,
                        image: 'react.jpg'
                        
                    },
                ],
                selectedBook:'',
            },
            components:{
                'book': BookComponent,
            },
        })
        </script>
    </body>
</html>