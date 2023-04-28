<template>
  <div id="app">
    <div class="container">
      <h2>Tus libros favoritos</h2>

      <div class="container book" v-if="books">
        <!--Encontró resultados-->
        <div class="ind" v-for="book in books" :key="book">
          <h2>{{ book.title }}</h2>
          <img :src="book.img" alt="portada" v-if="book.img" />
            <img
              src="https://via.placeholder.com/150x200"
              alt="Portada de '1984'"
              v-else
            />
          <h6>ISBN: {{ book.isbn }}</h6>
          <p>Autor: {{ book.author }}</p>
          <p>Año de publicación: {{ book.year }}</p>
          <p>Género: {{ book.gender }}</p>
          <p>Descripción: {{ book.desc }}</p>
          <span class="input-group-btn">
            <button
              class="btn btn-primary"
              type="submit"
              @click="quitarFav(book)"
            >
              <i class="fa fa-ban"></i>
              Quitar de favoritos
            </button>
          </span>
        </div>
      </div>
      <!--No se encontro nada-->
      <div class="error" v-if="find">
        <div class="notification is-danger">
          No se encontraron libros. ¡Comienza a agregar libros a tu estantería
          personal! Para ello accede al menú superior en "<i
            class="fa fa-search"
          ></i
          >Buscar libro" y una vez que encuentres lo que buscas guardalo para
          que se despliegue en esta parte
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from "../firebase/init.js";

export default {
  data() {
    return {
      books: [],
      find: true,
      query: null,
    };
  },

  name: "Dashboard",

  mounted() {
    this.getFav();
  },

  methods: {
    async getFav() {
      this.books = [];
      this.find = null;
      this.query = query(
        collection(firebase, "Books"),
        where("fav", "==", true)
      );

      await getDocs(this.query)
        .then((querySnapshot) => {
          if (querySnapshot.size < 1) {
            this.find = true;
          } else {
            querySnapshot.forEach((doc) => {
              this.books.push(doc.data());
            });
          }
        })
        .catch(() => (this.find = true));
    },
    quitarFav(book) {
      const db = firebase.collection("Books");
      db.doc(book.isbn)
        .update({
          fav: false,
        })
        .then(() => {
          this.getFav();
        })
        .catch((err) => {
          alert("No se pudo quitar el libro de favoritos" + err.message);
        });
    },
  },
};
</script>

<style>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css);
@import url(https://use.fontawesome.com/releases/v5.0.13/css/all.css);

.container {
  margin-bottom: 10px;
}

.f {
  width: fit-content;
}

.book {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: lightgray;
  margin: 20px;
}

.book h6 {
  margin-top: 10px;
}

.search {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: contain;
}

.btn {
  margin-left: 10px;
}

.ind {
  width: calc(30% - 10px);
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease-in-out;
  text-align: center;
}

.ind:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.ind img {
  margin-bottom: 10px;
  height: 200px;
  width: 150px;
}
</style>
