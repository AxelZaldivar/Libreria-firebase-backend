<template>
  <div id="app">
    <div class="container">
      <h2>Eliminar libro</h2>
      <form class="f">
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

        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            type="submit"
            @click="eliminarLibro()"
            :disabled="!isbnIsValid"
          >
            <i class="fa fa-trash"></i>
            Eliminar
          </button>
        </span>
      </form>
      <!--No se pudo eliminar-->
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
          ¡Libro eliminado con éxito!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/init.js";
const db = firebase.collection("Books");

export default {
  data() {
    return {
      isbn: null,
      error: false,
      good: false,
    };
  },

  name: "Delete",

  methods: {
    eliminarLibro() {
      db.doc(this.isbn)
        .delete()
        .then(() => {
          this.good = true;
          this.isbn = "";
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },

  computed: {
    isbnIsValid() {
      return !!this.isbn;
    },
  },
};
</script>

<style>

</style>
