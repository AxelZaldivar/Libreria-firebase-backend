<template>
  <div id="app">
    <div class="container">
      <h2>Agregar/Modificar un libro</h2>

      <div class="importante">
        <strong>Importante:</strong> Para actualizar la información de un libro,
        únicamente debes escribir su ISBN, modificar los campos y dar clic sobre
        el botón "Añadir/Modificar".
      </div>

      <form class="f" enctype="multipart/form-data">
        <!--ISBN-->
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
              /><br />
            </div>
          </div>
        </div>

        <!--Titulo-->
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
              /><br />
            </div>
          </div>
        </div>

        <!--Año-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/calendario.png" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="Año de publicación"
                v-model="year"
                type="text"
              /><br />
            </div>
          </div>
        </div>

        <!--Genero-->
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
              /><br />
            </div>
          </div>
        </div>

        <!--Autor-->
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
              /><br />
            </div>
          </div>
        </div>

        <!--Descripcion-->
        <div class="container">
          <div class="row">
            <div class="col-xs-2 ml-auto mt-auto mb-auto">
              <img src="../components/assets/txt.png" class="search" />
            </div>
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                placeholder="Descripción breve"
                v-model="desc"
                type="text"
              /><br />
            </div>
          </div>
        </div>

        <!--Portada-->
        <div class="container">
          <div class="row">
            <div class="col-xs-6 mr-auto mt-auto mb-auto">
              <input
                class="form-control"
                type="file"
                accept="image/"
                @change="clickImagen"
                ref="fileInput"
              /><br />
            </div>
          </div>
          <div class="importante">
            <strong>NOTA:</strong> La imagen debe medir <br />aproximadamente
            150x200 pixeles.
          </div>
        </div>

        <!--Botón de submit-->
        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            type="submit"
            @click="subirImagen"
            :disabled="
              !isbnIsValid ||
              !titleIsValid ||
              !genderIsValid ||
              !authorIsValid ||
              !descIsValid ||
              !imgIsValid
            "
          >
            <i class="fa fa-save"></i>
            Añadir /
            <i class="fa fa-edit"></i>
            Modificar
          </button>
        </span>
      </form>

      <!--No se pudo insertar la información-->
      <div class="error" v-if="error">
        <hr />
        <div class="notification is-danger">
          {{ error }}
        </div>
      </div>
      <!--Sí pudo-->
      <div class="alert" v-if="good">
        <hr />
        <div class="alert alert-primary alert-dismissible fade show">
          ¡Información registrada con éxito!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/init.js";
const db = firebase.collection("Books");
import storage from "../firebase/storage.js";

export default {
  name: "New",
  data() {
    return {
      isbn: null,
      title: null,
      year: null,
      gender: null,
      author: null,
      desc: null,
      fav: false,
      error: null,
      good: null,
      imagen: null,
      url: null,
    };
  },
  methods: {
    clickImagen(e) {
      this.imagen = e.target.files[0];
    },
    subirImagen() {
      const refImg = storage.ref().child("portadas/" + this.imagen.name);
      const metadata = { contentType: "img/jpeg" };
      refImg
        .put(this.imagen, metadata)
        .then(() => {
          this.obtenerURL();
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    obtenerURL() {
      storage
        .ref()
        .child("portadas/" + this.imagen.name)
        .getDownloadURL()
        .then((url) => {
          this.url = url;
          this.insertarLibro();
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    insertarLibro() {
      this.preClear();
      db.doc(this.isbn)
        .set({
          isbn: this.isbn,
          title: this.title,
          year: this.year,
          gender: this.gender,
          author: this.author,
          desc: this.desc,
          fav: this.fav,
          img: this.url,
        })
        .then(() => {
          this.clear();
          this.good = "good";
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    clear() {
      (this.isbn = ""),
        (this.title = ""),
        (this.year = ""),
        (this.gender = ""),
        (this.author = ""),
        (this.desc = "");
      this.imagen = null;
      this.$refs.fileInput.value = "";
      this.url = "";
    },
    preClear() {
      this.good = "";
      this.error = "";
    },
  },
  computed: {
    isbnIsValid() {
      return !!this.isbn;
    },
    titleIsValid() {
      return !!this.title;
    },
    yearIsValid() {
      return !!this.year;
    },
    genderIsValid() {
      return !!this.gender;
    },
    authorIsValid() {
      return !!this.author;
    },
    descIsValid() {
      return !!this.desc;
    },
    imgIsValid() {
      return !!this.imagen;
    },
  },
};
</script>

<style>
.importante {
  background-color: #fff3cd;
  color: #856404;
  border-color: #ffd33b;
  padding: 1rem;
  border: 1px solid;
  border-radius: 0.25rem;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
