<template>
  <div class="container">
    <div class="home">
      <header>
        <h1>Librería Vuevill</h1>
      </header>

      <section>
        <h2>Bienvenido a Vuevill</h2>
        <p>
          En nuestra librería, encontrarás una gran variedad de libros
          literarios de diferentes géneros, así como libros científicos que
          abarcan múltiples áreas del área tecnologica, tanto en formato físico
          como digital. Además, contamos con obras de autores reconocidos y
          emergentes, para que puedas descubrir nuevos talentos y explotar los
          que ya tienes, así como para que puedas pasar de una tarde agradable
          sumergido en un mundo de fantasía o lleno de acción.
        </p>
        <img
          src="../components/assets/estanteria.jpg"
          alt="Libros en una estantería"
        />
      </section>

      <section>
        <h2>Novedades</h2>
        <p>Encuentra los titulos que han sido publicados este año.</p>
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
                class="btn btn-primary btn-responsive"
                type="submit"
                @click="agregarFav(book)"
              >
                <i class="fa fa-check"></i>
                Agregar a favoritos
              </button>
            </span>
          </div>
        </div>
        <!--No se encontro nada-->
        <div class="error" v-if="find">
          <div class="notification is-danger">
            No se han publicado libros este año
          </div>
        </div>
      </section>

      <section>
        <h2>Lo más vendido</h2>
        <p>Encuentra los títulos científicos más populares.</p>
        <div class="container book" v-if="books1">
          <!--Encontró resultados-->
          <div class="ind" v-for="book in books1" :key="book">
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
                class="btn btn-primary btn-responsive"
                type="submit"
                @click="agregarFav(book)"
              >
                <i class="fa fa-check"></i>
                Agregar a favoritos
              </button>
            </span>
          </div>
        </div>
        <!--No se encontro nada-->
        <div class="error" v-if="find1">
          <div class="notification is-danger">Error</div>
        </div>
      </section>
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
      find: null,
      query: null,
      books1: [],
      find1: null,
      query1: null,
    };
  },

  name: "HomeView",

  mounted() {
    this.getAll();
  },

  methods: {
    getAll() {
      this.getNovedades();
      this.getVendidos();
    },
    async getNovedades() {
      var currentYear = new Date().getFullYear();
      this.books = [];
      this.find = null;
      this.query = query(
        collection(firebase, "Books"),
        where("year", "==", currentYear + "")
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
    async getVendidos() {
      this.books1 = [];
      this.find1 = null;
      this.query1 = query(
        collection(firebase, "Books"),
        where("gender", "==", "Ciencia")
      );

      await getDocs(this.query1)
        .then((querySnapshot) => {
          if (querySnapshot.size < 1) {
            this.find1 = true;
          } else {
            querySnapshot.forEach((doc) => {
              this.books1.push(doc.data());
            });
          }
        })
        .catch(() => (this.find1 = true));
    },
    agregarFav(book) {
      const db = firebase.collection("Books");
      db.doc(book.isbn).update({
        fav: true,
      });
    },
  },
};
</script>

<style>
/* Fuentes */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.home {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #f8f8f8;
}

.home h1,
.home h2 {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

.home header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: #fff;
  background-color: #41b883;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.home h1 {
  font-size: 36px;
  text-align: center;
  color: #fff;
}

.home section {
  margin: 10px;
  padding: 20px;
}

.home section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.home section p {
  margin-bottom: 20px;
  color: gray;
}
</style>
