import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: DefaultLayout,
      children: [
        {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
        },
        {
        path: "/surveys",
        name: "Surveys",
        component: Surveys
        },
    ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
  ]
})

export default router;
