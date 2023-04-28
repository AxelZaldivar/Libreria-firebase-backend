import { createRouter, createWebHashHistory, RouterLink } from 'vue-router'

//importar las rutas de las vistas
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Search from '../views/Search.vue'
import New from '../views/New.vue'
import Delete from '../views/Delete.vue'
import Update from '../views/Auth/Update.vue'

//importar Firebase para recuperar el usuario y darle acceso al Dashboard
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/new',
    name: 'new',
    component: New,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/delete',
    name: 'delete',
    component: Delete,
    meta: {
      requireAuth: true
    }
  },
  {
  path: '/update',
  name: 'update',
  component: Update,
  meta: {
    requireAuth: true
  }
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//solo permitir el acceso al Dashboard si se ha iniciado sesión
router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta=>ruta.meta.requireAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'login'
      })
    }
  }else{
    next();
  }
})

export default router
