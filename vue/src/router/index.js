import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SurveyView from '../views/SurveyView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: DefaultLayout,
      meta: {
        requiresAuth: true
      },
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
        {
        path: "/surveys/create",
        name: "SurveyCreate",
        component: SurveyView
        },
        {
        path: "/surveys/:id",
        name: "SurveyView",
        component: SurveyView
        },
    ]
    },
    {
      path: "/auth",
      redirect: "/login",
      name: "Auth",
      component: AuthLayout,
      meta: {
        isGuest: true
      },
      children: [
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
    },

  ]
})

router.beforeEach((to, from, next) => {
  // if user is not logged in redirect to login
  if(to.meta.requiresAuth && !store.state.user.token){
    next({name: 'Login'})
  } else if (store.state.user.token && (to.meta.isGuest)) {
    // if user is logged in redirect to dashboard if user tries to access login and register
    next({name: 'Dashboard'})
  } else {
    next()
  }
})

export default router;
