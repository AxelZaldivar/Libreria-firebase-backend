<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/components/assets/logo.png" class="logo" />
        <h3 class="title is-3">Librería Vuevill</h3>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        @click.prevent="toggleMenu"
        :class="{ 'is-active': isOpen }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> {{ user.displayName || user.email }} </a>
              <div class="navbar-dropdown">
                <!--Dashboard-->
                <router-link class="navbar-item" to="/dashboard">
                  <i class="fa fa-book"></i>
                  <span class="espacio">Tus libros</span>
                </router-link>
                <!--Search-->
                <router-link class="navbar-item" to="/search">
                  <i class="fa fa-search"></i>
                  <span class="espacio">Buscar libro</span>
                </router-link>
                <!--New-->
                <router-link class="navbar-item" to="/new">
                  <i class="fa fa-save"></i>
                  <span class="espacio"></span>
                  <i class="fa fa-edit"></i>
                  <span class="espacio">Agregar/Modificar libro</span>
                </router-link>
                <!--Delete-->
                <router-link class="navbar-item" to="/delete">
                  <i class="fa fa-trash"></i>
                  <span class="espacio">Eliminar libro</span>
                </router-link>
                <!--Update-->
                <router-link class="navbar-item" to="/update">
                  <i class="fa fa-user-circle"></i>
                  <span class="espacio">Actualizar perfil</span>
                </router-link>
                <!--Cerrar sesión-->
                <a class="navbar-item" @click.prevent="logout">
                  <i class="fa fa-window-close"></i>
                  <span class="espacio">Cerrar sesión</span></a
                >
              </div>
            </div>
            <p class="white">aaaaaaaaaa</p>
          </template>

          <template v-else>
            <div class="buttons">
              <router-link class="button is-primary" to="/register">
                <strong>Registrarme</strong>
              </router-link>
              <router-link class="button is-light" to="/login">
                Iniciar sesión
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
//importar firebase para saber cuando el usuario inicia sesion
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  //atributos o propieddaes del componente
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  //métodos del componente
  methods: {
    toggleMenu() {
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
  //ciclo de vida, es cuando se crea el componente
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style>
.navbar {
  margin-bottom: 30px;
}

.logo {
  height: max-content;
  width: max-content;
  margin: 10px;
}

.white {
  color: white;
}

.espacio {
  margin-left: 10px;
}
</style>
