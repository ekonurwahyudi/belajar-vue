export const BookComponent ={
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
    props: ['id'],
    computed:{
        book(){
            let book = this.books.filter((book)=>{
                return book.id === parseInt(this.id)
            })

            if (book.length == 0){
                alert("Buku tidka ditemukan")
                this.$router.push("/books")
            }else{
                return book[0]
            }

        }
    },
    template:`
        <div v-if="book">
            <h1>{{ book.judul }}</h1>
            <ul>
                <li v-for="(num, value) of book">
                    {{ num +' : '+ value}} <br>
                </li>
            </ul>
        </div>
    `,
    beforeRouteLeave (to, from, next){
        const answer = window.confirm('Apakah anda yakin ingin keluar?')
        if(answer){
            next()
        }else {
            next(false)
        }
    }
}