export const BookComponent ={
    data(){
        return{
            classCard: 'card'
        }
    },
    props: ['book'],
    template:`
        <div :class="classCard">
            <h3>{{ book.judul }}</h3>
            <img :src="'images/books/'+book.image" style="height: 200; width:100%">
            <p v-html="book.deskripsi"></p>
            <button @click="$emit('selected', book.judul + ' ' + book.harga)"> Select </button>
        </div>
    `
}