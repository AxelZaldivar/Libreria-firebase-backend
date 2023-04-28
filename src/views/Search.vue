<template>
  <div id="app">
    <div class="container">
      <h2>Buscar libro</h2>
      <form class="f">
        <!--Buscar por ISBN-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/barras.png" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="ISBN"
                v-model="isbn"
                type="text"
              />
            </div>
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                type="submit"
                @click="searchISBN()"
                :disabled="!isbnIsValid"
              >
                <i class="fa fa-search"></i>
                Buscar
              </button>
            </span>
          </div>
        </div>

        <!--Buscar por titulo-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/portada.png" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="Título"
                v-model="title"
                type="text"
              />
            </div>
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                type="submit"
                @click="searchTitle()"
                :disabled="!titleIsValid"
              >
                <i class="fa fa-search"></i>
                Buscar
              </button>
            </span>
          </div>
        </div>

        <!--Buscar por genero-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/genero.jpg" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="Género"
                v-model="gender"
                type="text"
              />
            </div>
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                type="submit"
                @click="searchGender()"
                :disabled="!genderIsValid"
              >
                <i class="fa fa-search"></i>
                Buscar
              </button>
            </span>
          </div>
        </div>

        <!--Buscar por autor-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/monito.png" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="Autor"
                v-model="author"
                type="text"
              />
            </div>
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                type="submit"
                @click="searchAuthor()"
                :disabled="!authorIsValid"
              >
                <i class="fa fa-search"></i>
                Buscar
              </button>
            </span>
          </div>
        </div>
      </form>

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
        <hr />
        <div class="notification is-danger">
          No se encontraron resultados con ese criterio
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from "../firebase/init.js";
import storage from "../firebase/storage.js";

export default {
  data() {
    return {
      books: [],
      isbn: null,
      title: null,
      gender: null,
      author: null,
      find: false,
      query: null,
    };
  },

  name: "Search",

  methods: {
    async search() {
      this.books = [];
      await getDocs(this.query)
        .then((querySnapshot) => {
          if (querySnapshot.size < 1) {
            this.find = true;
          } else {
            querySnapshot.forEach((doc) => {
              this.books.push(doc.data());
            });
            this.clean();
          }
        })
        .catch(() => (this.find = true));
    },
    searchISBN() {
      this.query = query(
        collection(firebase, "Books"),
        where("isbn", "==", this.isbn)
      );
      this.search();
    },
    searchTitle() {
      this.query = query(
        collection(firebase, "Books"),
        where("title", "==", this.title)
      );
      this.search();
    },
    searchGender() {
      this.query = query(
        collection(firebase, "Books"),
        where("gender", "==", this.gender)
      );
      this.search();
    },
    searchAuthor() {
      this.query = query(
        collection(firebase, "Books"),
        where("author", "==", this.author)
      );
      this.search();
    },
    clean() {
      this.isbn = "";
      this.title = "";
      this.gender = "";
      this.author = "";
      this.find = false;
    },
    agregarFav(book) {
      const db = firebase.collection("Books");
      db.doc(book.isbn).update({
        fav: true,
      });
    },
  },

  computed: {
    isbnIsValid() {
      return !!this.isbn;
    },
    titleIsValid() {
      return !!this.title;
    },
    genderIsValid() {
      return !!this.gender;
    },
    authorIsValid() {
      return !!this.author;
    },
  },
};
</script>

<style>
.btn-responsive {
  width: calc(100% - 10px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
