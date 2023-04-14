import {
  createStore
} from "vuex"

import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The codeholic youtube channel content",
    slug: "thecodeholic-youtube-chanel-content",
    status: "draft",
    image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/dwmesevcanufsw2k3jf4",
    description: "I have 10+ years of experience working as a professional software developer. I have been teaching coding over 4 years. Here you will find courses that are 100% free on youTube.com",
    created_at: "2023-04-14 13:00:00",
    updated_at: "2023-04-14 13:00:00",
    expire_date: "2023-04-19 13:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you",
        description: null,
        data: {
          options: [
            {
              uuid: "f8ad96f2-1d80-9e9e-b560610e52ea",
              text: "USA"
            },
            {
              uuid: "28ad96f2-1d80-9e9e-b560610e52ea",
              text: "Georgia"
            },
            {
              uuid: "q8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Germany"
            },
            {
              uuid: "b8ad96f2-1d80-9e9e-b560610e52ea",
              text: "India"
            },
            {
              uuid: "a8ad96f2-1d80-9e9e-b560610e52ea",
              text: "United Kingdom"
            },
          ]
        },
      },
      {
        id: 2,
        type: "Checkbox",
        question: "Which language videos do you want to see on my channel",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem, maiores nulla corporis reprehenderit voluptatum eos ullam sint totam dolorum, maxime enim at voluptates expedita minus perferendis excepturi mollitia quas?",
        data: {
          options: [
            {
              uuid: "f8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Javascript"
            },
            {
              uuid: "28ad96f2-1d80-9e9e-b560610e52ea",
              text: "PHP"
            },
            {
              uuid: "q8ad96f2-1d80-9e9e-b560610e52ea",
              text: "HTML + CSS"
            },
            {
              uuid: "b8ad96f2-1d80-9e9e-b560610e52ea",
              text: "All the above"
            },
          ]
        },
      },
      {
        id: 3,
        type: "Checkbox",
        question: "Which php framework do you want to see on my channel",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem, maiores nulla corporis reprehenderit voluptatum eos ullam sint totam dolorum, maxime enim at voluptates expedita minus perferendis excepturi mollitia quas?",
        data: {
          options: [
            {
              uuid: "f8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Laravel"
            },
            {
              uuid: "28ad96f2-1d80-9e9e-b560610e52ea",
              text: "Yii2"
            },
            {
              uuid: "q8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Codeigniter"
            },
            {
              uuid: "b8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Symphony"
            },
          ]
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which laravel version do you love",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem, maiores nulla corporis reprehenderit voluptatum eos ullam sint totam dolorum, maxime enim at voluptates expedita minus perferendis excepturi mollitia quas?",
        data: {
          options: [
            {
              uuid: "f8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Laravel 5"
            },
            {
              uuid: "28ad96f2-1d80-9e9e-b560610e52ea",
              text: ""
            },
            {
              uuid: "q8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Laravel 7"
            },
            {
              uuid: "b8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Laravel 8"
            },
          ]
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What type of projects dp you want to see being built with laravel",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem, maiores nulla corporis reprehenderit voluptatum eos ullam sint totam dolorum, maxime enim at voluptates expedita minus perferendis excepturi mollitia quas?",
        data: {
          options: [
            {
              uuid: "f8ad96f2-1d80-9e9e-b560610e52ea",
              text: "REST API"
            },
            {
              uuid: "28ad96f2-1d80-9e9e-b560610e52ea",
              text: "E-commerce"
            },
            {
              uuid: "q8ad96f2-1d80-9e9e-b560610e52ea",
              text: "Real Estate"
            },
            {
              uuid: "b8ad96f2-1d80-9e9e-b560610e52ea",
              text: "All the above"
            },
          ]
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favorite you tube channel",
        description: null,
        data: {

        }
      },
      {
        id: 7,
        type: "textarea",
        question: "What do you think about your favorite youtube channel",
        description: "write your honest opinion. Everything is anonymous.",
        data: {

        }
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 10",
    slug: "Laravel-10",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png",
    description: "Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.",
    created_at: "2023-04-14 13:00:00",
    updated_at: "2023-04-14 13:00:00",
    expire_date: "2023-04-19 13:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://vuejs.org/images/logo.png",
    description: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
    created_at: "2023-04-14 13:00:00",
    updated_at: "2023-04-14 13:00:00",
    expire_date: "2023-04-19 13:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "Tailwind-3",
    status: "active",
    image: "https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg",
    description: "TailwindCSS is a framework like no other. Rather than constraining you to a set design, it gives you the tools and the standardization to build exactly what you want without hassle.",
    created_at: "2023-04-14 13:00:00",
    updated_at: "2023-04-14 13:00:00",
    expire_date: "2023-04-19 13:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({
      commit
    }, user) {
      return axiosClient.post("/register", user)
        .then(({
          data
        }) => {
          commit('setUser', data);
          return data;
        })
    },
    login({
      commit
    }, user) {
      return axiosClient.post("/login", user)
        .then(({
          data
        }) => {
          commit('setUser', data);
          return data;
        })
    },
    logout({
      commit
    }) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    }
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    }
  },
  modules: {}
})

export default store
