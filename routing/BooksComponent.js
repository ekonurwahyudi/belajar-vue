export const BooksComponent ={
    data(){
        return {
            books: [
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
            ]
        }
    },
    computed:{
        book(){
            return this.books.filter((book)=>{
                return book.id === parseInt(this.$router.params.id)
            })[0]
        }
    },
    template:`
        <div>
            <h1>Daftar Buku</h1>
            <ul>
                <li v-for="book of books">
                    <router-link :to="'/book/'+book.id">
                        {{ book.judul }}
                    </router-link>
                </li>
            </ul>
        </div>
    `
}