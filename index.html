<html>
    <head>
        <title>Belajar Vue</title>
        <script src="lib/vue.js"></script>
        <style>
            form{
                border: 1px solid #ddd;
                padding: 5px;
                width: 225px;
                background: #efefef;
            }
            label{
                display: block;
                margin-top: 5px;
            }
            input, textarea, select, option{
                min-width: 200px;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <form ref="formBook" @submit.prevent="submitForm($event)" action="http://kosong.com/add-product" method="POST">
                <p v-if="errors.length">
                    <b>Tolong dikoreksi lagi</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>
                <label>Title:</label>
                <input type="text" name="title" ref="title" v-model="title"/>
                
                <label>Deskripsi</label>
                <textarea name="description" ref="description" v-model="description"></textarea>
                
                <label>Penulis:</label>
                <input type="text" name="authors" ref="authors" v-model="authors">

                <label>Harga:</label>
                <input type="number" name="price" ref="price" v-model.number="price">

                <label>Cover:</label>
                <input name="cover" ref="cover" type="file">

                <label>Kategori:</label>
                <select name="categories" ref="categories" v-model="categories" multiple>
                    <option v-for="option in options" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <label></label>
                <input type="submit" value="Submit">
            </form>
        </div>

        <script type="text/javascript">
        var vm = new Vue({
            el: '#app',
            data: {
              title: 'Belajar pyhton',
              description: 'belajar lebih mudah',
              authors: 'Eko Nurwahyudi',
              price: 80000,
              categories: [],
              options: [
                  { text: 'Python', value: '01'},
                  { text: 'Java', value: '02'},
                  { text: 'VUe', value: '03'}
              ],
              errors:[]  
            },
            methods:{
                submitForm(event){
                    this.errors = []
                    if(this.title.length < 3){
                       this.errors.push('title min 3 karakter')
                       this.$refs.title.select()
                    }
                    if(this.description.length > 500){
                        this.errors.push('Deskripsi maximal 500 karakter')
                        this.$refs.description.select()
                    }
                    if(this.authors.length < 3){
                        this.errors.push('Author min 3 karakter')
                        this.$refs.authors.select()
                    }
                    if(this.price < 0 ){
                        this.errors.push('harga ngak boleh minus')
                        this.$refs.price.select()
                    }
                    if(this.categories.length === 0 ){
                        this.errors.push('pilih min 1 kategori')
                        this.$refs.categories.select()
                    }
                    if(this.errors.length === 0){
                        let formBook = this.$refs.formBook
                        formData = new FormData(formBook);

                        let xhttp = new XMLHttpRequest()
                        xhttp.onreadystatechange = function(){
                            if(this.readyState == 4 && this.status == 200){
                                console.log(this.responseText)
                            }
                        }

                        xhttp.open("POST", "http://localhost/belajar-vue/data.php", true)

                        xhttp.send(formData)

                        let cover = this.$refs.cover.files[0]
                        formData.apped("cover", cover);
                    }
                    
                }
            }
        })
        </script>
    </body>
</html>