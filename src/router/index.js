import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Home from '@/components/home'
import Contact from '@/components/contact'
import Blog from '@/components/blog'
import Services from '@/components/services'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

[VueRouter, Vuetify].forEach((x) => Vue.use(x))

export default new VueRouter({
  mode: 'history',
  routes: [
   {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
